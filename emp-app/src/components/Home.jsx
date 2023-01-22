import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
  var [empdata, setData] = useState([]);
  useEffect(() => {
    fetchEmployeedata();
  }, []);
  var apLink = "https://jsonplaceholder.typicode.com/users";

  const fetchEmployeedata = () => {
    axios
      .get(apLink)
      .then((response) => {
        setData(response.data);
      })
      .catch();
  };

  return (
    <div>
  

      <div className="container">
        <div className="row">
          <div className="column">
            <div className="card bg-light">
              <div className="card-title" >
               <h3>Employee details</h3>
              </div>
              <div className="card-body">
                <Table celled className="table">
                  <Table.Header style={{ backgroundColor: "lightblue", fontfamily:"Sans-Serif"}}>
                    <Table.Row>
                      <Table.HeaderCell>Id</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>phonenumber</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {empdata.map((item, key) => {
                      return (
                        <Table.Row>
                          <Table.Cell>{item.id}</Table.Cell>
                          <Table.Cell>{item.name}</Table.Cell>
                          <Table.Cell>{item.email}</Table.Cell>
                          <Table.Cell>{item.phone}</Table.Cell>
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
