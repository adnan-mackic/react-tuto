import React, {useState} from 'react'
import {Col, Row, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'
import CommonButton from 'routes/components/CommonButton'
import CommonDemo from 'routes/components/CommonDemo'
import iconEdit from 'images/commonIcons/edit.svg'

const useStyles = makeStyles({
  imageSize: {
    height: 25,
    padding: 3,
    marginRight: 8,
  },
  buttonSize: {
    cursor: 'pointer',
    padding: 4,
    width: 130,
  },
  imgSize: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
  modelTitle: {
    fontSize: 22,
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
  modelLabel: {
    fontSize: 12,
    color: '#403839',
    fontFamily: 'SFUIText-Bold',
  },
  modelText: {
    fontFamily: 'SFUIText-Semibold',
  },
})

const WalletEditButton = () => {
  const classes = useStyles()
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  )
  const DemoOne =
    'The available credit balance for this type is displayed below. You can add or remove credits for this type for this person using the field below. Simply edit the amount, enter a description for the change and select Save Changes. Select Cancel to return without making any changes.'

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn} className={classes.modelTitle}>
          Add/Edit Adjustment
        </ModalHeader>
        <ModalBody>
          <CommonDemo content={DemoOne} />
          <Form className="mx-3">
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Balance
              </Label>
              <Label sm={1}>$0.00</Label>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Adjustment
              </Label>
              <Col sm={8}>
                <Row>
                  <Col lg={6} className="mb-3">
                    <Input type="select" name="select" placeholder="Add">
                      <option>Add</option>
                      <option>Substract</option>
                    </Input>
                  </Col>
                  <Col lg={6}>
                    <Input type="text"></Input>
                  </Col>
                </Row>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                New Balance
              </Label>
              <Label sm={6}>$0.00</Label>
            </FormGroup>
            <FormGroup row>
              <Label for="input" sm={4} className={classes.modelLabel}>
                Description
              </Label>
              <Col sm={8}>
                <Input></Input>
              </Col>
            </FormGroup>
          </Form>
          <Row className="mx-1">
            <Col className="d-flex justify-content-end">
              <CommonButton title="Cancel" onClick={toggle} buttonType="cancelButton" />
              <CommonButton title="Save" buttonType="saveButton" onClick={toggle} />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <div color="link" onClick={toggle} className={classes.buttonSize}>
        <Row>
          <Col>
            <div className={classes.imgSize}>
              <img src={iconEdit} className={classes.imageSize} />
            </div>
          </Col>
          <Col>Edit</Col>
        </Row>
      </div>
    </div>
  )
}

export default WalletEditButton
