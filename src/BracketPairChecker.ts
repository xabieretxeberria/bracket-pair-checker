import { Stack } from "./Stack";

export class BracketPairChecker {
	private inputString: string;
	private stack: Stack<string>;
	private validCharacters: string[] = ['(', ')', '[', ']', '{', '}']

	constructor(inputStr: string) {
		this.inputString = inputStr;
		this.stack = new Stack<string>();
	}

	public CheckBracketPairs(): boolean {
		const chars = [...this.inputString];

		chars.forEach(c => {
			if (this.isOpenCharacter(c)) {
				this.stack.push(c);
			}

			if (this.isCloseCharacter(c)) {
				const poppedChar = this.stack.pop();
				if (poppedChar != c) return false;
			}
		});

		return this.stack.isEmpty();
	}

	private isOpenCharacter(char: string) {
		return ['(', '[', '{'].includes(char);
	}

	private isCloseCharacter(char: string) {
		return [')', ']', '}'].includes(char);
	}
}