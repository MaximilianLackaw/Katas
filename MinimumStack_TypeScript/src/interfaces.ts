export interface IMinStack {

  /**
   * Push element x onto stack.
   */
  push(x: number) : void;

  /**
   * Removes the element on top of the stack.
   */
  pop(): void;

  /**
   * Get the top element.
   */
  top(): number;

  /**
   * Retrieve the minimum element in the stack.
   */
  getMin(): number;

  /**
   * Checks if stack is empty.
   */
  isEmpty(): boolean;
}
