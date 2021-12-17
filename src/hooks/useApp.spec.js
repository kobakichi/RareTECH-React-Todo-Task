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
  describe("【関数テスト】handleAddTodo", () => {});
  describe("【関数テスト】handleRemoveTodo", () => {});
  describe("【関数テスト】handleOnEdit", () => {});
  describe("【関数テスト】handleChangeSearchKeyword", () => {});
});
