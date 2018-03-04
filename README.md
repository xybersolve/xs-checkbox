# xs-checkbox

## Simple CheckBox, with
* user customizable icons
* check/unchecked label text
* returns expected e.target object for controlled forms

# Installation

Use npm, yarn os other npm package manager you choose to install `xs-checkbox`.

```sh
# npm
npm i -S xs-checkbox

# yarn
yarn add xs-checkbox
```

# Usage
Three examples below, show
1. Simplest: default checkmark
2. Custom Icon, shows when 'checked'
3. Check & unchecked icons, checked & unchecked text

```js
import CheckBox from 'xs-checkbox'

...

handleCheckBoxChange(e){
  // do something with checked value
  console.log(`${e.target.name}, checked: ${e.target.checked}`)
}
...

<CheckBox
  checked
  text='Default checkmark'
  name='Checkbox1'
  onChange={this.handleCheckBoxChange}
/>

<CheckBox
  checked
  text='Much-room to grow'
  name='Checkbox3'
  checkedIcon='🍄'
  onChange={this.handleCheckBoxChange}
/>

<CheckBox
  checked
  name='emperorsChoice'
  checkedIcon='👍🏻'
  unCheckedIcon='👎🏻'
  checkedText='Yeah, baby!'
  unCheckedText='Off with his head!'
  onChange={this.handleCheckBoxChange}
/>
```

# Style

## Using component element classes

```css

.xs-checkbox {
  height: 25px;
}
.xs-checkbox-icon {
  min-width: 25px;
}

.xs-checkbox-text {
  color: #666;
}

```

# Contributing

Issues and Pull requests are always welcome. Please keep in mind that there is a code of conduct.

To get started, install the dev dependencies and build the exports if needed.

```sh
# install dependencies
npm install

# build the project for distribution
npm run build:prod
```

# [Code of Conduct](CODE_OF_CONDUCT.md)

# [License](LICENSE.md)
