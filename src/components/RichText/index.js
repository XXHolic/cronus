import React from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styles from './index.css';

class RichText extends React.Component {
  constructor(props) {
    super(props);

    var fonts = ['sofia', 'slabo', 'roboto', 'inconsolata', 'ubuntu'];
    var Font = Quill.import('formats/font');
    Font.whitelist = fonts;
    Quill.register(Font, true);

    this.toolbar = [
      [{ 'font': fonts }, { 'size': [] }],
      [ 'bold', 'italic', 'underline', 'strike' ],
      [{ 'color': [] }, { 'background': [] }],
      // [{ 'script': 'super' }, { 'script': 'sub' }],
      [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
      [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
      [ {'direction': 'rtl'}, { 'align': [] }],
      [ 'link', 'image', 'video', ],
      // [ 'clean' ]
    ];
  }

  componentDidMount() {
    var quill = new Quill('#quill-container', {
      modules: {
        toolbar: this.toolbar
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'  // or 'bubble'
    });
  }

  render() {

    return (
      <div>
        <div className={styles['rich-text']}>
          <div id="quill-container"></div>
        </div>
      </div>
    );
  }

};

RichText.propTypes = {
};

export default RichText;