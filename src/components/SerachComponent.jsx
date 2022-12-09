import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../redux/actions";
import { Row, Form, Card } from "react-bootstrap";

const SearchComponent = () => {
  const [query, setQuery] = useState(" ");

  const dispatch = useDispatch();

  const dataRedux = useSelector((state) => state.query.queryList);
  //the query on the line above came from the bigReducer on the store component
  const listOfResults = dataRedux.data;
  console.log(listOfResults);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getDataAction(query));
  };

  return (
    <>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="Type and press Enter"
          />
        </Form>
      </Row>
      {listOfResults && (
        <>
          {listOfResults.map((element) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={element.album.cover} />
              <Card.Body>
                <Card.Title>{element.title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </>
  );
};

export default SearchComponent;
