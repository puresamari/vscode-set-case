export type Blocks = string[];

export function getBlocks(text: string): Blocks {
  let l0 = text.split(' ');
  let l1 = l0.map(v => v.split('_'));
  let l2 = l1.map(v0 => v0.map(v1 => {
    const blocks = [''];
    v1.split(/([a-z][A-Z])/).forEach((element, index, array) => {
      if (index % 2 === 1) {
        // is a split poin 
        blocks[(index - 1) / 2] += element[0];
        blocks.push(element[1]);
      } else {
        blocks[index / 2] += element;
      }
    });
    v1.split('_');
    return blocks;
  }));

  const blocks: Blocks = [];
  
  l2.forEach(v => v.forEach(v1 => v1.forEach(v2 => blocks.push(v2))));

  return blocks;
}

export function WrapConverter(conveter: (string: Blocks) => string): (string: string) => string {
  return s => conveter(getBlocks(s));
}