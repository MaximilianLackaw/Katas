import {EmptyStackError} from './errors';
import {IMinStack} from './interfaces';

export class MinStack implements IMinStack{
    private stack: number[];
    private minimumElementStack: number[];

    public constructor() {
      this.stack = [];
      this.minimumElementStack = [];
    }

    public push(x: number): void {
      this.stack.push(x);
      if (this.minimumElementStack.length === 0 || this.getMin() >= x) {
        this.minimumElementStack.push(x);
      }
    }

    public pop(): void {
      if (this.isEmpty()) {
        throw new EmptyStackError('Stack is empty');
      }

      const oldTopEleemnt = this.stack.pop();
      if (oldTopEleemnt === this.getMin()) {
        this.minimumElementStack.pop();
      }
    }

    public top(): number {
      return this.stack[this.stack.length -1];
    }

    public getMin(): number {
      return this.minimumElementStack[this.minimumElementStack.length - 1];
    }

    public isEmpty(): boolean {
      return this.stack.length === 0;
    }
}
