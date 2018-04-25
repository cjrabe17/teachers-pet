import axios from "axios";

export default {
  // Gets all assignments
  getAssignments: function() {
    return axios.get("/api/assignments");
  },
  // Gets the assignment with the given id
  getAssignment: function(id) {
    return axios.get("/api/assignments/" + id);
  },
  // Deletes the assignment with the given id
  deleteAssignment: function(id) {
    return axios.delete("/api/assignments/" + id);
  },
  // Saves a assignment to the database
  saveAssignment: function(bookData) {
    return axios.post("/api/assignments", assignmentData);
  }
};
