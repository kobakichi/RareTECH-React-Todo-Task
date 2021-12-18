/**
 * useApp.spec
 */
import { renderHook, act } from "@testing-library/react-hooks";
/* hooks */
import { useApp } from "./useApp";
/* constants */
import { INIT_TODO_LIST, INIT_TODO_LIST_COUNT } from "../constants/data";

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
      const expectTodoTitle = "Todo3";
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
  });
  describe("【関数テスト】handleRemoveTodo", () => {});
  describe("【関数テスト】handleOnEdit", () => {});
  describe("【関数テスト】handleChangeSearchKeyword", () => {});
});
