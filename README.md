# Bracket Pair Checker

## Context

This is a coding exercise proposed by [Martín Cristóbal](https://es.linkedin.com/in/martincrb) in his [YouTube channel, BettaTech](https://www.youtube.com/channel/UCSf6S_PAhXsqGMTPDiKgdRg) ([link to the video](https://www.youtube.com/watch?v=Sc-rjCODBDY)).

My intention with completing this exercise is practising Typescript, specially testing.

The exercise statement goes at follows:

>Given a string formed by (), [] and {}, write a program that tells if the pairing is correct.
>
>Input: `[()]{}{[()()]()}` &rarr; :heavy_check_mark:
>
>Input: `[(])` &rarr; :x:

## Approach

All the logic that solves this problem is stored in the `BracketPairChecker` class. The data needed to solve the problem is stored in its members:

- `inputString`: The string that the method is going to check.
- `stack`: This stacks stores the characters than the program has processed. When an open character is read, it is stored here.
- `oppositeCharacters`: It's a map that stores the opening character for every closing character.

The `CheckBracketPairs` method processes the input string character by character.

- If the current character is an opening character (`(`, `[` or `{`), it is stored in the stack.
- If it's a closing character, pops the first element of the stack. **This popped element should be the opposite to the current character, for the string to be valid**.

### Testing

I used [Alsatian](https://github.com/alsatian-test/alsatian) to test my code. The tested cases the ones showed in the statement.

There are still some cases to be tested; for example, when the string starts with a closing character.