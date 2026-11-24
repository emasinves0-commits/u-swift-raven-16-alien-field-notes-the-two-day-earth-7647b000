# AGENT.md — Build notes

## The entry

> Five stars for the room, zero for the hosts: they waved at checkout, then followed me home in a metal tube for years.

117 characters, single line, no trailing newline.

## Why it wins

- **Alien review voice:** the entry reads as a genuine hospitality review, so the alien premise is carried by the format itself rather than explained.
- **Abduction reframed as a complaint:** being followed home in a metal tube (a UFO) becomes a service failure, not a sci-fi event — the joke is the mismatch between tone and content.
- **Single clean joke:** one idea, one sentence, no clutter; nothing dilutes the punch.
- **Split-star verdict:** "five stars for the room, zero for the hosts" sets up a contrast the reader resolves in the second half.
- **Punch at the end:** "for years" lands last, turning a friendly wave into a long, creepy pursuit.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` — exactly the entry line, 117 bytes, no trailing newline.
