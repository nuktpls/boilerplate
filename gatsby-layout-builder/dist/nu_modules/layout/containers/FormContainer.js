"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormContainer;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _Form = _interopRequireDefault(require("../components/Form"));

var _config = _interopRequireDefault(require("../config/"));

var _slugify = _interopRequireDefault(require("../../../tools/slugify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { useStaticQuery, graphql } from 'gatsby'
// import addToMailchimp from 'gatsby-plugin-mailchimp'
// import submitHandler from '../../PoupaLuz/containers/submit-handler'
// import mainYAML from '@Content/main.yaml'
// import { useSiteMetaDatas } from '../../../tools/useSiteMetaDatas'
function FormContainer(_ref) {
  let {
    opt
  } = _ref;
  const [search, setSearch] = (0, _react.useState)('');
  const [honey, setHoney] = (0, _react.useState)('');
  const {
    searchBaseUrl
  } = null; // const { site } = useSiteMetaDatas()
  // const [mcRes, setMcRes] = useState('')
  // console.log(mcRes)
  // const [msg, setMsg] = useState('')
  // const [success, setSuccess] = useState('')
  // const handleMcRes = (msgReceived, resReceived) => {
  // 	setMcRes(resReceived)
  // 	handleMsg(msgReceived, resReceived)
  // 	handleSuccess(resReceived)
  // }
  // const handleMsg = (msgNow, resReceived) => {
  // 	let msgNull = null
  // 	if (resReceived === 'error') {
  // 		msgNull = config.nope_msg
  // 	}
  // 	if (resReceived === 'success') {
  // 		msgNull = config.success_msg
  // 	}
  // 	setMsg(msgNull)
  // }
  // const handleSuccess = (successNow) => {
  // 	setSuccess(successNow)
  // }

  const handleSearchChange = searchTyping => {
    setSearch(searchTyping);
  };

  const handleHoneypotChange = honeyTyping => {
    console.log('honeypot');
    setHoney(honeyTyping);
  };

  const theFunction = param => {
    return document.location = searchBaseUrl + (0, _slugify.default)(param);
  };

  const handleSubmit = async (e, search, honey) => {
    if (!e) {
      return null;
    } // const configExample = {
    // 	ajax_url: 'http://localhost:3000/wp-admin/admin-ajax.php',
    // }
    // const dataExample = {
    // 	user: 'user',
    // 	pwd: 'pwd',
    // 	action: 'login_init',
    // }
    // easyAjax(configExample, dataExample, 'POST')


    e.preventDefault();
    honey || theFunction(search); // (await submitHandler(configExample, dataExample).then(
    // ({ msg, result }) => {
    // handleMcRes(msg, result)
    // return console.log('logo')
    // }
  }; // const msgStyle =
  // 	success === 'success' ? config.success_class : config.nope_class


  return /*#__PURE__*/_react.default.createElement(_Form.default, {
    handleSubmit: handleSubmit,
    honeypotStateChanger: handleHoneypotChange,
    searchStateChanger: handleSearchChange,
    search: search // msg={msg}
    // msgStyle={msgStyle}
    // success={success}
    ,
    honey: honey,
    bot_msg: _config.default.bot_msg,
    form_class: _config.default.form_class,
    size: _config.default.size // has_Link={nu_teias.link}
    // link_url={config.link_url}
    // link_text={config.link_text}
    ,
    search_placeholder: _config.default.search_placeholder || opt.placeholder,
    noSPAM: _config.default.noSPAM,
    warnME: _config.default.warnME
  });
}