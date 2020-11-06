import { Stack } from "./Stack";

export class BracketPairChecker {
	private inputString: string;
	private stack: Stack<string>;

	private oppositeCharacters = new Map([
		[")", "("],
		["]", "["],
		["}", "{"],
	]);

	constructor(str: string) {
		this.inputString = str;
		this.stack = new Stack<string>();
	}

	public CheckBracketPairs(): boolean {
		const chars = [...this.inputString];
		let returnValue = true;

		chars.forEach(c => {
			if (this.isOpenCharacter(c)) {
				this.stack.push(c);
			}

			if (this.isCloseCharacter(c)) {
				let poppedChar = this.stack.pop();
				if (this.oppositeCharacters.get(c) != poppedChar) {
					returnValue = false;
					return;
				}
			}
		});

		return returnValue;
	}

	private isOpenCharacter(char: string) {
		return ['(', '[', '{'].includes(char);
	}

	private isCloseCharacter(char: string) {
		return [')', ']', '}'].includes(char);
	}
}