import React, { Component } from 'react';
import {Tabs,Tab} from 'react-bootstrap'
import DetailAnnuel from './DetailAnnuel.js'
import DetailMensuel from './DetailMensuel.js'


class Detail extends Component {

    render() {
        return (
          <div>

            <div className="wrapper wrapper-content">
              <Tabs id="controlled-tab-example" className="TabsClass">
                <Tab eventKey={1} title="Mensuel">
                  <DetailMensuel/>
                </Tab>
                <Tab eventKey={2} title="Annuel">
                  <DetailAnnuel/>
                </Tab>
              </Tabs>
            </div>

          </div>
        )
    }

}

export default Detail
