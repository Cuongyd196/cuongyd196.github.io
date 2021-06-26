import React, { Component } from 'react';

import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

import AppMarkdown from './add.md';

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

class MarkDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        }
    }
    componentWillMount() {
        fetch(AppMarkdown).then(res => res.text()
        ).then(text =>
            this.setState({
                markdown: text
            })
        );
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}></div>
        )
    }
}

export default MarkDown;