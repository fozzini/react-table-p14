"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactable = require("@codbear/reactable");

var columnItems = [{
  header: "First Name",
  dataField: "firstName",
  isSortable: true
}, {
  header: "Last Name",
  dataField: "lastName",
  isSortable: true
}, {
  header: "Start Date",
  dataField: "startDate",
  isSortable: true
}, {
  header: "Department",
  dataField: "department",
  isSortable: true
}, {
  header: "Date Of Birth",
  dataField: "dateOfBirth",
  isSortable: true
}, {
  header: "Street",
  dataField: "street",
  isSortable: true
}, {
  header: "City",
  dataField: "city",
  isSortable: true
}, {
  header: "State",
  dataField: "state",
  isSortable: true
}, {
  header: "Zip Code",
  dataField: "zipCode",
  isSortable: true
}];

var TableEmployee = function TableEmployee(props) {
  var _useState = (0, _react.useState)(5),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      itemsPerPage = _useState2[0],
      setItemsPerPage = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "table"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "listTitle",
    role: "region",
    "aria-label": "list title"
  }, "Employees List"), /*#__PURE__*/_react.default.createElement(_reactable.Table, {
    data: props.data,
    columns: columnItems,
    itemsPerPage: itemsPerPage,
    onChangeItemsPerPage: setItemsPerPage,
    itemsPerPageOptions: [5, 10, 25, 50, 100],
    variant: "filled",
    hasSearchBar: true
  }));
};

var id = document.getElementsByClassName("iqBCQs");

for (var index = 0; index < id.length; index++) {
  var element = id[index];
  var keys = Object.keys(element);
  var key = keys[1];
  var object = element[key];
  delete element.key;
  element.removeAttribute("aria-description");
  console.log(object);
}

var _default = TableEmployee;
exports.default = _default;