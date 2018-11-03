const output = (obj) => (`
  <figure>
    <img src='${obj.image}' alt='${obj.alt_text || obj.caption || ''}'/>
    ${(obj.caption) ? `<figcaption>${obj.caption}</figcaption>` : ''}
  </figure>
`);

const Figure = {
  id: 'figure',
  label: 'Figure',
  fields: [
    {name: 'image', label: 'Image', widget: 'image'},
    {name: 'alt_text', label: 'Alt Text', widget: 'string'},
    {name: 'caption', label: 'Caption', widget: 'string'}
  ],
  toBlock: output,
  toPreview: output
};

export default Figure;