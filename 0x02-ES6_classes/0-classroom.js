/**
 * Class representing a classroom with a maximum
 * number of students.
 */
export default class ClassRoom
{
	/**
	 * Creates a new ClassRoom instance.
	 * @param {Number} maxStudentsSize - The maximum number of
	 * students allowed in the class.
	 */
	constructor(maxStudentsSize)
	{
		/**
		 * The maximum number of students allowed in the class.
		 * @type {Number}
		 * @private
		 */
		this._maxStudentsSize = maxStudentsSize;
	}
}
