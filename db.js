/*
 *  VITacademics
 *  Copyright (C) 2015  Kunal Nagpal <kunagpal@gmail.com>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

module.exports = function (year) {
  var date = new Date;
  var arrayIndex = date.getFullYear() - 2000 - year;
  var month = date.getMonth();
  if (month >= 0 && month <= 6) {
    arrayIndex = arrayIndex - 1;
  }
  arrayIndex = (arrayIndex < 4) ? arrayIndex : 4;
  return arrayIndex;
};
