import { css, } from 'lit-element';


export default css`:host {
  display: block;
  box-sizing: border-box;
  @apply --capacitacion-list; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit; }

table {
  border: 0px;
  width: 100%; }

table th {
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-weight: normal; }

table td {
  padding: 10px;
  background-color: #fff;
  color: #121212;
  border-bottom: 1px solid #e1e1e1;
  font-size: 0.9em; }
`;