/**
 * A function that reads from a Database Synchronously
 * @param {String} dataPath The path to the CSV file
 * @author Comfort99
 */
const fs = require('fs');

const countStudents = (dataPath) => {
  try {
    if (!fs.existsSync(dataPath)) {
      throw new Error('Cannot load the database');
    }
    if (!fs.statSync(dataPath).isFile()) {
      throw new Error('Cannot load the database');
    }
    const fileLines = fs
      .readFileSync(dataPath, 'utf-8')
      .toString('utf-8')
      .trim()
      .split('\n');
    if (fileLines.length === 0) {
      console.log('Cannot load the database');
    }
    // Remove the header row and process student's data
    const studentData = fileLines.slice(1).filter((line) => line.trim() !== '');
    const studentCount = studentData.length;
    console.log(`Number of students: ${studentCount}`);

    const studentField = studentData.reduce((acc, line) => {
      const [firstname, , , field] = line.split(',');
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(firstname);
      return acc;
    }, {});

    Object.entries(studentField).forEach(([field, students]) => {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
