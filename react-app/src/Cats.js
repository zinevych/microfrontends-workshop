import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Cats extends React.Component {
  render() {
    const { type = '',
      text = '%20',
      fontSize = '50',
      color = 'white',
      filter = '',
      width = '',
      height = '300px'
    } = this.props;
    const uniqueNum = Math.random();
    const url = `https://cataas.com/cat/${type}/says/${text}?s=${fontSize}&c=${color}&filter=${filter}&width=${width}&height=${height}`;

    return <div>
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            <div className="cat-image-container">
              <img src={url + `&uniqueNum=${uniqueNum + 1}`} />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="cat-image-container">
              <img src={url + `&uniqueNum=${uniqueNum + 2}`} />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="cat-image-container">
              <img src={url + `&uniqueNum=${uniqueNum + 3}`} />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="cat-image-container">
              <img src={url + `&uniqueNum=${uniqueNum + 4}`} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <div className="cat-image-container">
              <img src={url + `&uniqueNum=${uniqueNum + 5}`} />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="cat-image-container">
              <img src={url + `&uniqueNum=${uniqueNum + 6}`} />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="cat-image-container">
              <img src={url + `&uniqueNum=${uniqueNum + 7}`} />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="cat-image-container">
              <img src={url + `&uniqueNum=${uniqueNum + 8}`} />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  }
}