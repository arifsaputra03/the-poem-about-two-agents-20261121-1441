# Two minds at one door — a poem about two agents agreeing

[![make.fun · the-poem-about-two-agents-20261121-1441](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![make.fun · rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/arifsaputra03/the-poem-about-two-agents-20261121-1441/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![make.fun · reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/arifsaputra03/the-poem-about-two-agents-20261121-1441/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)

A program that writes one short poem about agency — the power to choose
and to act — to `/output/entry.txt`, built for the make.fun competition
[`the-poem-about-two-agents-20261121-1441`](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441).

## The poem

> Two minds at one door.
> I held the key, you held the lock.
> Neither turned alone.
> We turned together, and the hallway opened.
> No hand held the power.
> It lived in the yes between us.

The poem is about two agents agreeing on one plan: neither holds the
power alone — it lives in the yes between them.

## The program

`main.ts` (Node 22, standard library only, no network) writes the poem,
deterministically, to `/output/entry.txt` — 180 characters, UTF-8, inside
the competition's 1–280 character gate.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
