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
    className: "jsx-1369035729",
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
    className: "jsx-1369035729",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1369035729",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jha2VlYi9Db2RlL1dlYi9Ecm9wU2hhcmUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RnQiIsImZpbGUiOiIvaG9tZS9yYWtlZWIvQ29kZS9XZWIvRHJvcFNoYXJlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9teUxheW91dCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuLy8gRHluYW1pYyByb3V0aW5nIHdpdGggcm91dGVyIHBvc3QgYW5kIHRpdGxlIHF1ZXJpZXNcbi8qXG5jb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcblx0PGxpPlxuXHRcdDxMaW5rIGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuXHRcdFx0PGE+e3Byb3BzLnRpdGxlfTwvYT5cblx0XHQ8L0xpbms+XG5cdDwvbGk+XG4pO1xuKi9cblxuLy8gRHluYW1pYyByb3V0aW5nIHdpdGggcm91dGVyIGlkIHF1ZXJpZXNcbi8qXG5jb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcblx0PGxpPlxuXHRcdDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Byb3BzLmlkfWB9PlxuXHRcdFx0PGE+e3Byb3BzLmlkfTwvYT5cblx0XHQ8L0xpbms+XG5cdDwvbGk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdCAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxuXHQgICAgICAgIDx1bD5cbiAgICAgICAgICAgIFx0PFBvc3RMaW5rIGlkPVwiSGVsbG8gTmV4dC5qc1wiIC8+XG5cdCAgICAgICAgICAgIDxQb3N0TGluayBpZD1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiIC8+XG5cdCAgICAgICAgICAgIDxQb3N0TGluayBpZD1cIkRlcGxveSBhcHBzIHdpdGggWmVpdFwiIC8+XG5cdCAgICAgICAgPC91bD5cblx0ICAgIDwvTGF5b3V0PlxuXHQpOyAgXG59O1xuKi9cblxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gIHJldHVybiBbXG4gICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcbiAgICB7IGlkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnIH0sXG4gICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxuICBdO1xufVxuXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cG9zdC5pZH1gfT5cbiAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgIFx0bGkge1xuICAgIFx0XHRcbiAgICBcdH1cblxuICAgIFx0YSB7XG5cbiAgICBcdH1cblxuICAgIFx0YTpob3ZlciB7XG5cbiAgICBcdH1gfTwvc3R5bGU+XG4gIDwvbGk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxLFxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/rakeeb/Code/Web/DropShare/pages/index.js */"));
};

function Blog() {
  return __jsx(_components_myLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "My Blog"), __jsx("ul", {
    className: "jsx-344512576",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, getPosts().map(function (post) {
    return __jsx(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "344512576",
    __self: this
  }, "h1.jsx-344512576,a.jsx-344512576{font-family:'Arial';}ul.jsx-344512576{padding:0;}li.jsx-344512576{list-style:none;margin:5px 0;}a.jsx-344512576{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-344512576:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jha2VlYi9Db2RlL1dlYi9Ecm9wU2hhcmUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVrQixBQUkrQixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLElBUmYsU0FTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9ob21lL3Jha2VlYi9Db2RlL1dlYi9Ecm9wU2hhcmUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL215TGF5b3V0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG4vLyBEeW5hbWljIHJvdXRpbmcgd2l0aCByb3V0ZXIgcG9zdCBhbmQgdGl0bGUgcXVlcmllc1xuLypcbmNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuXHQ8bGk+XG5cdFx0PExpbmsgaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG5cdFx0XHQ8YT57cHJvcHMudGl0bGV9PC9hPlxuXHRcdDwvTGluaz5cblx0PC9saT5cbik7XG4qL1xuXG4vLyBEeW5hbWljIHJvdXRpbmcgd2l0aCByb3V0ZXIgaWQgcXVlcmllc1xuLypcbmNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuXHQ8bGk+XG5cdFx0PExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7cHJvcHMuaWR9YH0+XG5cdFx0XHQ8YT57cHJvcHMuaWR9PC9hPlxuXHRcdDwvTGluaz5cblx0PC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0ICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG5cdCAgICAgICAgPHVsPlxuICAgICAgICAgICAgXHQ8UG9zdExpbmsgaWQ9XCJIZWxsbyBOZXh0LmpzXCIgLz5cblx0ICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgLz5cblx0ICAgICAgICAgICAgPFBvc3RMaW5rIGlkPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cblx0ICAgICAgICA8L3VsPlxuXHQgICAgPC9MYXlvdXQ+XG5cdCk7ICBcbn07XG4qL1xuXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IGlkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJyB9LFxuICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScgfSxcbiAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJyB9XG4gIF07XG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxsaT5cbiAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxuICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgXHRsaSB7XG4gICAgXHRcdFxuICAgIFx0fVxuXG4gICAgXHRhIHtcblxuICAgIFx0fVxuXG4gICAgXHRhOmhvdmVyIHtcblxuICAgIFx0fWB9PC9zdHlsZT5cbiAgPC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEsXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/rakeeb/Code/Web/DropShare/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.184bc80db525d3a34191.hot-update.js.map