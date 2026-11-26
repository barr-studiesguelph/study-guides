# Prompt for making a new guide with Claude

Copy everything inside the box below into Claude, fill in the bracketed parts, and attach your notes if you have them. Claude will give you one Markdown file that works on the site as-is.

```text
Write a study guide on [TOPIC] for [COURSE NAME / LEVEL, e.g. "first-year microeconomics"].
[Optional: attach or paste my notes, and say what the exam focuses on.]

Output ONE Markdown file, nothing else, using exactly these conventions so it works on my Zensical site:

1. Start with front matter:
   ---
   title: [Short Title]
   description: [One sentence]
   ---
2. Then a single "# Title" heading. Use "##" for sections, "###" for sub-sections.
3. Open with a summary box:
   !!! abstract "What you need to know"
       - 4 to 6 key bullet points
4. Include a "## Key terms" table (Term | Meaning).
5. Math: $...$ for inline math and $$...$$ on their own lines for display math (LaTeX). Write dollar signs meaning money as \$ so they aren't read as math.
6. Worked examples go in:
   !!! example "Worked example"
       (numbered steps, final answer in bold)
7. Exam tips and common mistakes go in:
   !!! tip "Exam tip"
8. End with "## Practice questions": 4 to 6 questions, each as a collapsible box with the answer inside:
   ??? question "1. Question text"
       Full worked answer.
9. Indent everything inside a !!! or ??? box by exactly 4 spaces.
10. Do not copy text from textbooks, lecture slides or past exams. Write everything in your own words.

Before you finish, re-check every calculation and every practice answer step by step.
```

## After Claude replies

1. **Check it yourself.** Read it against your course notes, and re-do at least the worked examples. This is the part that makes the site trustworthy (and it's what you're actually putting on your resume).
2. **Name the file** in lowercase with dashes, for example `market-structures.md`.
3. **Add it** to the right folder in `docs/` (see README, "Adding a new guide").
