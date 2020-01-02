webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_myLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/myLayout */ "./components/myLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/rakeeb/Code/Web/DropShare/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // Dynamic routing with router post and title queries

/*
const PostLink = props => (
	<li>
		<Link href={`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
);
*/
// Dynamic routing with router id queries

/*
const PostLink = props => (
	<li>
		<Link href="/p/[id]" as={`/p/${props.id}`}>
			<a>{props.id}</a>
		</Link>
	</li>
);

export default function Blog() {
	return (
		<Layout>
	        <h1>My Blog</h1>
	        <ul>
            	<PostLink id="Hello Next.js" />
	            <PostLink id="Learn Next.js is awesome" />
	            <PostLink id="Deploy apps with Zeit" />
	        </ul>
	    </Layout>
	);  
};
*/

function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx("li", {
    className: "jsx-2275239964",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2275239964",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2275239964",
    __self: this
  }, "li.jsx-2275239964{list-style:none;margin:5px 0;}a.jsx-2275239964{-webkit-text-decoration:underline;text-decoration:underline;color:blue;font-family:'Arial';}a.jsx-2275239964:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jha2VlYi9Db2RlL1dlYi9Ecm9wU2hhcmUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RnQixBQUd1QixBQUtVLEFBTWQsWUFDYixJQVhjLGFBQ2QsK0JBSVksV0FDUyxvQkFDckIiLCJmaWxlIjoiL2hvbWUvcmFrZWViL0NvZGUvV2ViL0Ryb3BTaGFyZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbi8vIER5bmFtaWMgcm91dGluZyB3aXRoIHJvdXRlciBwb3N0IGFuZCB0aXRsZSBxdWVyaWVzXG4vKlxuY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG5cdDxsaT5cblx0XHQ8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cblx0XHRcdDxhPntwcm9wcy50aXRsZX08L2E+XG5cdFx0PC9MaW5rPlxuXHQ8L2xpPlxuKTtcbiovXG5cbi8vIER5bmFtaWMgcm91dGluZyB3aXRoIHJvdXRlciBpZCBxdWVyaWVzXG4vKlxuY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG5cdDxsaT5cblx0XHQ8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwcm9wcy5pZH1gfT5cblx0XHRcdDxhPntwcm9wcy5pZH08L2E+XG5cdFx0PC9MaW5rPlxuXHQ8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0PlxuXHQgICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cblx0ICAgICAgICA8dWw+XG4gICAgICAgICAgICBcdDxQb3N0TGluayBpZD1cIkhlbGxvIE5leHQuanNcIiAvPlxuXHQgICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIiAvPlxuXHQgICAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIiAvPlxuXHQgICAgICAgIDwvdWw+XG5cdCAgICA8L0xheW91dD5cblx0KTsgIFxufTtcbiovXG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICByZXR1cm4gW1xuICAgIHsgaWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnIH0sXG4gICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJyB9LFxuICAgIHsgaWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnIH1cbiAgXTtcbn1cblxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgPGxpPlxuICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Bvc3QuaWR9YH0+XG4gICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICBcdGxpIHtcbiAgICBcdFx0bGlzdC1zdHlsZTogbm9uZTtcbiAgICBcdFx0bWFyZ2luOiA1cHggMDtcbiAgICBcdH1cblxuICAgIFx0YSB7XG4gICAgXHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIFx0XHRjb2xvcjogYmx1ZTtcbiAgICBcdFx0Zm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgXHR9XG5cbiAgICBcdGE6aG92ZXIge1xuICAgIFx0XHRvcGFjaXR5OiAwLjY7XG4gICAgXHR9YH08L3N0eWxlPlxuICA8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPk15IEJsb2c8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSxcbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/rakeeb/Code/Web/DropShare/pages/index.js */"));
};

function Blog() {
  return __jsx(_components_myLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "My Blog"), __jsx("ul", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, getPosts().map(function (post) {
    return __jsx(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "344512576",
    __self: this
  }, "h1.jsx-344512576,a.jsx-344512576{font-family:'Arial';}ul.jsx-344512576{padding:0;}li.jsx-344512576{list-style:none;margin:5px 0;}a.jsx-344512576{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-344512576:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jha2VlYi9Db2RlL1dlYi9Ecm9wU2hhcmUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VrQixBQUkrQixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9ob21lL3Jha2VlYi9Db2RlL1dlYi9Ecm9wU2hhcmUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL215TGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG4vLyBEeW5hbWljIHJvdXRpbmcgd2l0aCByb3V0ZXIgcG9zdCBhbmQgdGl0bGUgcXVlcmllc1xuLypcbmNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuXHQ8bGk+XG5cdFx0PExpbmsgaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG5cdFx0XHQ8YT57cHJvcHMudGl0bGV9PC9hPlxuXHRcdDwvTGluaz5cblx0PC9saT5cbik7XG4qL1xuXG4vLyBEeW5hbWljIHJvdXRpbmcgd2l0aCByb3V0ZXIgaWQgcXVlcmllc1xuLypcbmNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuXHQ8bGk+XG5cdFx0PExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cHJvcHMuaWR9YH0+XG5cdFx0XHQ8YT57cHJvcHMuaWR9PC9hPlxuXHRcdDwvTGluaz5cblx0PC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0ICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG5cdCAgICAgICAgPHVsPlxuICAgICAgICAgICAgXHQ8UG9zdExpbmsgaWQ9XCJIZWxsbyBOZXh0LmpzXCIgLz5cblx0ICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgLz5cblx0ICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cblx0ICAgICAgICA8L3VsPlxuXHQgICAgPC9MYXlvdXQ+XG5cdCk7ICBcbn07XG4qL1xuXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJyB9LFxuICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScgfSxcbiAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJyB9XG4gIF07XG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgXHRsaSB7XG4gICAgXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgXHRcdG1hcmdpbjogNXB4IDA7XG4gICAgXHR9XG5cbiAgICBcdGEge1xuICAgIFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBcdFx0Y29sb3I6IGJsdWU7XG4gICAgXHRcdGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgIFx0fVxuXG4gICAgXHRhOmhvdmVyIHtcbiAgICBcdFx0b3BhY2l0eTogMC42O1xuICAgIFx0fWB9PC9zdHlsZT5cbiAgPC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEsXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/rakeeb/Code/Web/DropShare/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5b45ec1cda8e4191d980.hot-update.js.map