import React, { Component } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap'
import { RiPencilLine } from 'react-icons/ri'
import { FaRegBuilding, FaUniversity } from 'react-icons/fa'
import { TiCameraOutline } from 'react-icons/ti'
import { GiCancel } from 'react-icons/gi'

function JumBotron(props) {

    return (
        <div id="jumbotronMain" className="contentCol box-shadow " >
            <div id='cameraIcon'>
                {props.profileInfo.username === "user16" &&
                    <TiCameraOutline />
                }
            </div>
            <div id="jumbotron">
                <Image fluid className="w-100" src="/assets/jumbotronCover.jpeg" />
            </div>
            <div id="profilePhoto">
                {props.profileInfo.image
                    ? <Image src={props.profileInfo.image} />
                    : <Image src='https://img.icons8.com/officel/2x/user.png' />
                }
            </div>
            <div>
                <Row className="d-flex justify-content-between">
                    <Col md={6} className="pl-5" id="firstCol">
                        <h4>{props.profileInfo.name} {props.profileInfo.surname}</h4>
                        <h5>{props.profileInfo.bio.length > 29 ? props.profileInfo.bio.slice(0, 29) + "..." : props.profileInfo.bio}</h5>
                        <div className="d-flex">
                            <h6 className="mr-4">{props.profileInfo.area}</h6>
                            <h6 className="mr-4"><p> 97 connections </p></h6>
                            <h6 className="mr-4"><p>Contact info</p></h6>
                        </div>
                    </Col>
                    <Col md={6} className="mt-4 d-flex flex-column">
                        <div className="align-self-end mr-4">
                            {props.profileInfo.username === "user16" ?
                                <>
                                    <Button>Add profile section</Button>
                                    <Button id="secondButton">More ...</Button>
                                    <RiPencilLine />
                                </>
                                :
                                <>
                                    <Button>Message</Button>
                                    <Button id="secondButton">More ...</Button>
                                </>
                            }
                        </div>
                        <div id="status" >
                            <div className="d-flex mt-4">
                                <FaRegBuilding /><p>{props.profileInfo.title}</p>
                            </div>
                            <div className="d-flex">
                                <FaUniversity /><p>--School--</p>
                            </div>
                        </div>
                    </Col>

                    <div id="moreInfo" className="ml-5 mr-5 mb-3">
                        <div id="xbutton">
                            {props.profileInfo.username === "user16" &&
                                <GiCancel />
                            }
                        </div>
                        <p>
                            <span>Show recruiters you’re open</span> to job opportunities—you control who sees this.
                                <br></br>
                                Get started
                            </p>
                    </div>
                </Row>
            </div>
        </div>

    );
}

export default JumBotron;