export default function decorate(block) {
  const div = main.querySelector('div');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (div && picture) {
    const section = document.createElement('div');
    section.append(buildBlock('cardswhite', { elems: [picture, div] }));
    block.append(section);
  }
}
