/**
 * useApp.spec
 */
import { renderHook, act } from "@testing-library/react-hooks";
/* hooks */
import { useApp } from "./useApp";
/* constants */
import { INIT_TODO_LIST } from "../constants/data";

describe("【Hooksテスト】", () => {
  describe("【関数テスト】handleChangeAddInputTodo", () => {
    test("【正常系】handleChangeAddInputTodoを更新できること", () => {
      //予測値
      const expectedValue = "テスト";
      //ダミー引数
      const eventObject = {
        target: {
          value: expectedValue,
        },
      };
      //renderHook hooksを呼び出す
      const { result } = renderHook(() => useApp());
      //addInputValueの値が空文字であること
      expect(result.current[0].addInputValue).toBe("");
      //hooks関数の実行
      act(() => result.current[1].handleChangeAddInputTodo(eventObject));
      //addInputValueの値が更新されていること
      expect(result.current[0].addInputValue).toBe(expectedValue);
    });
  });

  describe("【関数テスト】handleAddTodo", () => {
    //予測値
    let expectTodoList = [];
    //引数
    let eventObject = {
      target: {
        value: "テスト",
      },
      key: "Enter",
    };

    /**
     * beforeEach関数
     * test関数が実行される前に毎回実行される
     * 今回の場合、テスト対象に渡す引数を毎回初期化する
     */
    beforeEach(() => {
      //引数の初期化
      eventObject = {
        target: {
          value: "テスト",
        },
        key: "Enter",
      };
    });

    test("【正常系】handleAddTodoでリストにtodoが追加されること", () => {
      //予測値
      const expectTodoTitle = "Task3";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle,
      });
      //引数
      eventObject.target.value = expectTodoTitle;

      //hooks呼び出し
      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");
      //hooks関数の実行(addInputValueを更新)
      act(() => result.current[1].handleChangeAddInputTodo(eventObject));
      expect(result.current[0].addInputValue).toBe(expectTodoTitle);
      //hooks関数の実行:handleAddTodoの実行
      act(() => result.current[1].handleAddTodo(eventObject));
      //TodoListが予測値どうりに更新されたこと
      expect(result.current[0].todos).toEqual(expectTodoList);
      //入力値(addInputValue)がリセットされたこと
      expect(result.current[0].addInputValue).toBe("");
    });
    //ここから次のテスト内容へ切り替え
    test("【正常系】エンターキーを押していない場合、処理が発生しないこと", () => {
      //予測値
      const expectTodoTitle = "Task4";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle,
      });
      //引数
      eventObject.target.value = expectTodoTitle;
      eventObject.key = "";
      //hooks呼び出し
      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");
      //hooks関数の実行(addInputValueを更新する、入力値を受け取る処理)
      act(() => result.current[1].handleChangeAddInputTodo(eventObject));
      expect(result.current[0].addInputValue).toBe(expectTodoTitle);
      //hooks関数の実行: handleAddTodoの実行でTodoリストへ追加
      act(() => result.current[1].handleAddTodo(eventObject));
      //TodoListが予測値どうりに更新されない
      expect(result.current[0].todos).not.toEqual(expectTodoList);
      //入力値(addInputValue)がリセットされない、空にならない
      expect(result.current[0].addInputValue).not.toBe("");
    });
    //ここから次のテスト内容へ切り替え
    test("【正常系】入力値がない場合、処理が発生しないこと", () => {
      //予測値
      const expectTodoTitle = "Task5";
      expectTodoList = INIT_TODO_LIST.concat({
        id: 3,
        title: expectTodoTitle,
      });
      //引数
      eventObject.target.value = "";
      eventObject.key = "";
      //hooks呼び出し
      const { result } = renderHook(() => useApp());
      expect(result.current[0].addInputValue).toBe("");
      //hooks関数の実行(addInputValueを更新、入力値を受け取る)
      act(() => result.current[1].handleChangeAddInputTodo(eventObject));
      expect(result.current[0].addInputValue).toBe("");
      //hooks関数の実行(handleAddTodoの実行、Todoリストへ追加の処理)
      act(() => result.current[1].handleAddTodo(eventObject));
      //TodoListが予測値どうりに更新されない
      expect(result.current[0].todos).not.toEqual(expectTodoList);
    });

    // TODO: 追加テスト
    test("【正常系】検索した状態でTodoリストを追加できること", () => {});
  });

  describe("【関数テスト】handleRemoveTodo", () => {
    //予測値
    let expectTodoList = [];

    beforeEach(() => {
      //予測値を初期化
      expectTodoList = [];
    });

    test("【正常系】todoが削除されること", () => {
      //引数
      const targetId = 1;
      const targetTitle = "テスト";
      //window.confirmをモック化
      //confirmでOKをクリックした場合true
      window.confirm = jest.fn().mockReturnValueOnce(true);
      //予測値
      expectTodoList = INIT_TODO_LIST.filter((todo) => todo.id !== targetId);
      //hooks呼び出し
      const { result } = renderHook(() => useApp());
      //handleRemoveTodoの実行
      act(() => result.current[1].handleRemoveTodo(targetId, targetTitle));
      //設定したIDのTodoが削除されている事
      expect(result.current[0].todos).toEqual(expectTodoList);
    });
    test("【正常系】confirmでキャンセルをクリックした場合、todoが削除される事", () => {
      //引数
      const targetId = 1;
      const targetTitle = "テスト";
      //window.confirmをモック化
      //confirmでキャンセルをクリックした場合
      window.confirm = jest.fn().mockReturnValueOnce(false);
      //予測値
      expectTodoList = INIT_TODO_LIST;
      //hooks呼び出し
      const { result } = renderHook(() => useApp());
      //handleRemoveTodoの実行
      act(() => result.current[1].handleRemoveTodo(targetId, targetTitle));
      //Todoの削除処理が実行されない事
      expect(result.current[0].todos).toEqual(expectTodoList);
    });
    // TODO: 追加テスト
    test("【正常系】検索した状態でTodoリストを削除できること", () => {});
  });

  describe("【関数テスト】handleOnEdit", () => {
    test("【正常系】TodoListの中身を編集できること", () => {
      //引数
      const targetId = 1;
      const expectValue = "タスク編集";
      //予測値
      const expectTodoList = INIT_TODO_LIST;
      //hooks呼び出し
      const { result } = renderHook(() => useApp());
      //handleOnEditの実行
      act(() => result.current[1].handleOnEdit(targetId, expectValue));
      //Todoのid:1の値が編集されていること
      expect(result.current[0].todos).toEqual(expectTodoList);
    });
    // TODO: 追加テスト
    test("【正常系】検索した状態でTodoリストを編集できること", () => {});
  });

  describe("【関数テスト】handleChangeSearchKeyword", () => {
    test("【正常系】検索キーワードがある場合、検索された結果が表示される", () => {
      //予測値
      const expectValue = [INIT_TODO_LIST[0]];
      //引数
      const eventObject = {
        target: {
          value: "タスク編集",
        },
      };
      //mock
      jest.fn().mockReturnValue(INIT_TODO_LIST[0]);

      //hooks呼び出し
      const { result } = renderHook(() => useApp());
      //handleChangeSearchKeyword関数の実行　検索キーワード保持
      act(() => result.current[1].handleChangeSearchKeyword(eventObject));
      //結果が返ってくるか
      expect(result.current[0].filteredList).toEqual(expectValue);
    });

    test("【正常系】検索キーワードがない場合、元のTodoリストが表示される", () => {
      const expectValue = INIT_TODO_LIST;
      //引数
      const eventObject = {
        target: {
          value: "",
        },
      };

      //hooks呼び出し
      const { result } = renderHook(() => useApp());
      //hooks関数の実行
      act(() => result.current[1].handleChangeSearchKeyword(eventObject));
      //結果を判定
      expect(result.current[0].filteredList).toEqual(expectValue);
    });
  });
});
