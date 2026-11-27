// Renders math on every page, including after instant navigation.
// The Markdown step already turns $...$ and $$...$$ into \(...\) and \[...\],
// so only those delimiters are used here. That way, plain dollar amounts
// like "$1,000 ... $50,000" in a sentence are left alone.
document$.subscribe(({ body }) => {
  renderMathInElement(body, {
    delimiters: [
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
  });
});
