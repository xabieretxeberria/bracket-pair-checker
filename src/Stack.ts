export class Stack<T> {
	private content: T[] = [];

	constructor() {}

	push(item: T): void {
		this.content.push(item);
	}

	pop(): T | undefined {
		return this.content.pop();
	}

	isEmpty(): boolean {
		return this.content.length == 0;
	}
}