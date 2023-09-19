import React from 'react'

//details contains the modal for taking the details of the user like number of faculties, number of classes, etc.  
import Details from './Details'

//tablize contains the modal for showing the time table of the user.Its for students
import Tablize from './Tablize'
 
//tablizef contains the modal for showing the time table of the user.Its for faculties
import Tablizef from './Tablizef'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Row, Col, Form } from 'react-bootstrap';

//time_table is the 3d array which contains the time table of the user 
function Filling() {

    let [time_table, sett] = React.useState(
        Array.from({ length: 50 }, v => (
            Array.from({ length: 50 }, v => Array.from({ length: 50 }, v => parseInt(0)))))
    );
//time_table_checker is the 3d array which contains the time table of the user and is used to check if the time slot is already filled or not

    let [time_table_checker, settc] = React.useState(
        Array.from({ length: 50 }, v => (
            Array.from({ length: 50 }, v => Array.from({ length: 50 }, v => false))))
    );


    const opt = [];
    const opt1 = [];
    const opt2 = [];

    
    for (let i = 0; i <= 50; i++)
      opt.push(<option> {i} </option>);
    for (let i = 0; i <= 6; i++)
        opt2.push(<option> {i} </option>);

    const class_data = [];
    const faculty_data = [];
    const regexp = /^[0-9\b]+$/;

    const [allow, setAllow] = React.useState(true);
    const [algo, setAlgo] = React.useState(false);
    const [algo2, setAlgo2] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [no_of_Lectures, setLect] = React.useState(6);
    const [no_of_days, setdays] = React.useState(6);
    const [no_of_faculties, setthem] = React.useState(0);
    const [no_of_classes, setthem2] = React.useState(0);
    const [faculty_names, setfn] = React.useState([]);


    let head = [];

    //dayinput is the 2d array which contains the time table of the user , it is used to take the input from the user of the number of hours per week for each faculty for each class 
    let [dayinput, setdi] = React.useState(

        //here we are creating a 2d array of 50*50 and initializing it with 0 
        //becuase we are taking the input from the user in the form of a table and we are taking the input of the number of hours per week for each faculty for each class
        //so we are creating a table of 50*50 and initializing it with 0

        Array.from({ length: 50 }, v => (
            Array.from({ length: 50 }, v => { <div></div> }))));
    //no_of_days is the number of working days in a week which we get frm the user when he/she fills the details in the modal of total working days in a week.
    for (let i = 0; i <= no_of_days; i++)
        opt1.push(<option> {i} </option>);


    //week_hours is the 2d array which contains the number of hours per week for each faculty for each class , difference between this and dayinput is that dayinput is used to take the input from the user and week_hours is used to store the input taken from the user.

    const [week_hours, setwh] = React.useState(
        Array.from({ length: 50 }, v => Array.from({ length: 50 }, v => 0))
    );

    //week_hours_all is the 1d array which contains the number of hours per week for each faculty , difference between this and week_hours is that week_hours is used to store the input taken from the user and week_hours_all is used to store the total number of hours per week for each faculty . It takes the number of hours per week from week_hours and adds it to the total number of hours per week for each faculty.Week_hours gets it from dayinput and dayinput gets it from the user.

    const [week_hours_all, setwha] = React.useState(
        Array.from({ length: 50 }, v => 0)
    );

    //off_days_fac is the 1d array which contains the number of off days per week for each faculty , it is used to take the input from the user of the number of off days per week for each faculty , by default it is 0 , users till it by not entering the number of hours per week for each faculty for each class for the number of off days per week for each faculty.
    const [off_days_fac, setoff] = React.useState(
        Array.from({ length: 50 }, v => 0)
    );

    //what we are doing here is that we are creating a 2d array of 50*50 and initializing it with 0 , this 2d array is used to take the input from the user of the number of hours per week for each faculty for each class , we are creating a table of 50*50 and initializing it with 0 because we are taking the input from the user in the form of a table and we are taking the input of the number of hours per week for each faculty for each class
    const col_data = [];
    //col_data is the 1d array which contains the number of lectures in a day , it is used to take the input from the user of the number of lectures in a day , by default it is 6 , users till it by not entering the number of hours per week for each faculty for each class for the number of lectures in a day. It gets the input from the user in the variable no_of_Lectures.

    for (let i = 1; i <= no_of_Lectures; i++) {
        col_data.push(<th>Lecture {i}</th>)

        //here we are checking if the number of lectures in a day is even or odd , if it is odd then we are adding a reccess in the middle of the table , so that the table looks good. 
        if (i === Math.floor(no_of_Lectures / 2)) {
            col_data.push(<th rowSpan="6" >Reccess</th>)
        }
    }



    function fill_Faculties() {
        if (no_of_faculties === 0)
            return;

        for (let k = 1; k <= no_of_faculties; k++) {
            faculty_data.push(<div><Row>
                <Col>
                    <Form.Label>Name of Faculty {k}</Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        required='true'
                        onChange={(e) => {
                            faculty_names[k - 1] = (e.target.value);
                            console.log(faculty_names[k - 1], k);
                        }} />
                </Col>
                {/* <Col>
                    <Form.Label>Number of extra off days/week </Form.Label>
                </Col>
                <Col>
                    <Form.Control
                        as="select"
                        placeholder={"Should less than " + no_of_days}
                        onChange={(e) => {
                            off_days_fac[k - 1] = (e.target.value);
                        }
                        } >
                        {opt1}
                    </Form.Control>
                </Col> */}
            </Row></div>);
        }
    }


    function fill_classes() {
        if (no_of_classes === 0)
            return;

        // console.log('Faculties = ', faculty_names);

        dayinput = Array.from({ length: 50 }, v => (
            Array.from({ length: 50 }, v => { <div></div> })));

        head = [];
        for (let j = 1; j <= no_of_faculties; j++) {
            let a = faculty_names[j - 1];
            head.push(<td><center>Faculty {j} ({a})</center></td>)
        }

        for (let i = 1; i <= no_of_classes; i++) {
            dayinput[i - 1].push(<td><center>Classroom {i}</center></td>);
            for (let j = 1; j <= no_of_faculties; j++) {
                let a = faculty_names[j - 1];
                dayinput[i - 1].push(<td><center>
                    <Form.Control
                        onChange={(e) => {
                            week_hours[i - 1][j - 1] = (e.target.value);
                            // console.log(week_hours[i - 1][j - 1], i, j);
                        }}
                    />
                </center>
                </td>
                );
            }
        }
        class_data.push(<Table striped bordered hover size="sm" responsive   variant="success">
            <thead>
                <tr>
                    <th><center>#</center></th>
                    {head}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {dayinput[0]}
                </tr>
                <tr>
                    {dayinput[1]}
                </tr>
                <tr>
                    {dayinput[2]}
                </tr>
                <tr>
                    {dayinput[3]}
                </tr>
                <tr>
                    {dayinput[4]}
                </tr>
                <tr>
                    {dayinput[5]}
                </tr>
            </tbody >
        </Table >);
    }

    function getAllHours() {

        // console.log('1');
        if (no_of_faculties === 0)
            return true;
        // console.log('2');
        if (no_of_classes === 0)
            return true;
        // console.log('3');
        let sum = parseInt(0);
        for (let i = 1; i <= no_of_classes; i++) {
            sum = parseInt(0);
            for (let j = 1; j <= no_of_faculties; j++) {
                sum += parseInt(week_hours[i - 1][j - 1]);
            }
            if (sum > (no_of_Lectures * no_of_days)) {
                alert("Lectures limit exceeded for Class " + i + " by " + (sum - (no_of_Lectures * no_of_days)) + " lectures");
                return false;
            }
        }

        for (let i = 1; i <= no_of_classes; i++) {
            for (let j = 1; j <= no_of_faculties; j++) {
                if (!regexp.test(week_hours[i - 1][j - 1])) {
                    alert("Enter a Number for class " + i + " and faculty " + j + "(" + faculty_names[j - 1] + ")");
                    return false;
                }
            }
        }
        // console.log('4');

        for (let i = 1; i <= no_of_classes; i++) {
            for (let j = 1; j <= no_of_faculties; j++) {
                // console.log(week_hours_all[j - 1], "pre");
                week_hours_all[j - 1] = parseInt(week_hours_all[j - 1]) +
                    parseInt(week_hours[i - 1][j - 1]);
                // console.log(week_hours_all[j - 1], "post");
            }
        }

        for (let j = 1; j <= no_of_faculties; j++) {
            if (week_hours_all[j - 1] > (no_of_Lectures * (no_of_days - off_days_fac[j - 1]))) {
                alert("Lectures limit exceeded for faculty " + j + " (" + faculty_names[j - 1] + ") by " + (week_hours_all[j - 1] - (no_of_Lectures * (no_of_days - off_days_fac[j - 1]))) + " lectures");
                return false;
            }
        }

        // console.log('5');

        for (let i = 0; i < 50; i++) {
            for (let j = 0; j < 50; j++) {
                for (let k = 0; k < 50; k++) {
                    time_table[i][j][k] = parseInt(0);
                    time_table_checker[i][j][k] = false;
                }
            }
        }

        AlgorithmA();
        return true;
    }

    function resetAllHours() {
        // console.log("resetedall");
        for (let j = 1; j <= no_of_faculties; j++) {
            week_hours_all[j - 1] = 0;
        }
    }

    function resetOnlyHours() {
        // console.log("resetedonly");
        for (let i = 1; i <= no_of_classes; i++) {
            for (let j = 1; j <= no_of_faculties; j++) {
                week_hours[i - 1][j - 1] = 0;
            }
        }
    }

    function resetTimeTable() {

        for (let i = 0; i < 50; i++) {
            for (let j = 0; j < 50; j++) {
                for (let k = 0; k < 50; k++) {
                    time_table[i][j][k] = parseInt(0);
                    time_table_checker[i][j][k] = false;
                }
            }
        }
    }

    function foroff() {
        for (let i = 0; i <= no_of_days; i++) {
            opt1.push(<option> {i} </option>);
        }
    }

    function check() {
        if ((no_of_classes === '0') || (no_of_faculties === '0') || (no_of_classes === 0) || (no_of_faculties === 0)) {
            setAllow(true);
            return true;
        }
        else {
            setAllow(false);
            return false;
        }
    }

    function finalize() {
        if (check()) {
            alert("Button is dissabled due to insufficient datails")
            return;
        }
        setAlgo(true);
    }

    function finalize2() {
        if (check()) {
            alert("Button is dissabled due to insufficient datails")
            return;
        }
        setAlgo2(true);
    }

    function AlgorithmA() {

        for (let i = 1; i <= no_of_classes; i++) {
            // console.log("algo", i);
            let p = 0, tz = 0, wh = 0, loop = 0;
            for (let j = 1; j <= no_of_faculties; j++) {

                if (week_hours[i - 1][j - 1] === 0)
                    continue;

                wh = parseInt(week_hours[i - 1][j - 1])
                tz = parseInt(wh);
                p = parseInt(0);
                while (wh !== 0) {

                    // console.log(Math.floor(p / no_of_days), p);
                    if (time_table_checker[j - 1][Math.floor(p / no_of_days)][Math.floor(p % no_of_days)]) {
                        p++;
                        if (p >= (no_of_Lectures * no_of_days)) {
                            p = 0;
                            // break;
                        }
                        continue;
                    }

                    if (p >= (no_of_Lectures * no_of_days)) {
                        p = 0;
                        // break;
                        continue;
                    }

                    if (time_table[i - 1][Math.floor(p / no_of_days)][Math.floor(p % no_of_days)] === 0) {
                        wh--;
                        // console.log("wh------------------------------")
                        // console.log(time_table[i - 1][Math.floor(p / no_of_days)][Math.floor(p % no_of_days)], (i - 1), Math.floor(p / no_of_days), (p % no_of_days));
                        time_table[i - 1][Math.floor(p / no_of_days)][Math.floor(p % no_of_days)] = parseInt(j);
                        time_table_checker[j - 1][Math.floor(p / no_of_days)][Math.floor(p % no_of_days)] = true;
                    }
                    p++;
                    loop++;
                    if (loop > 3000) {
                        // alert("AlgorithmA failed")
                        console.log("AlgorithmA failed")
                        AlgorithmB()
                        break;
                    }
                }
                if (loop > 3000) {
                    break;
                }
            }
            if (loop > 3000) {
                break;
            }
        }

        // console.log("Algo-enddddddddddddddddddddd");
    }

    function AlgorithmB() {

        resetTimeTable();
        for (let i = 1; i <= no_of_classes; i++) {
            // console.log("algo", i);
            let p = 0, tz = 0, wh = 0, loop = 0;
            for (let j = 1; j <= no_of_faculties; j++) {

                if (week_hours[i - 1][j - 1] === 0)
                    continue;

                wh = parseInt(week_hours[i - 1][j - 1])
                tz = parseInt(wh);
                // p = parseInt(0);
                while (wh !== 0) {

                    // console.log(Math.floor(p / no_of_days), p);
                    if (time_table_checker[j - 1][Math.floor(p / no_of_days)][Math.floor(p % no_of_days)]) {
                        p++;
                        if (p >= (no_of_Lectures * no_of_days)) {
                            p = 0;
                            // break;
                        }
                        continue;
                    }

                    if (p >= (no_of_Lectures * no_of_days)) {
                        p = 0;
                        // break;
                        continue;
                    }

                    if (time_table[i - 1][Math.floor(p / no_of_days)][Math.floor(p % no_of_days)] === 0) {
                        wh--;
                        // console.log("wh------------------------------")
                        // console.log(time_table[i - 1][Math.floor(p / no_of_days)][Math.floor(p % no_of_days)], (i - 1), Math.floor(p / no_of_days), (p % no_of_days));
                        time_table[i - 1][Math.floor(p / no_of_days)][Math.floor(p % no_of_days)] = parseInt(j);
                        time_table_checker[j - 1][Math.floor(p / no_of_days)][Math.floor(p % no_of_days)] = true;
                    }
                    p++;
                    loop++;
                    if (loop > 3000) {
                        console.log("AlgorithmB failed")
                        break;
                    }
                }
                if (loop > 3000) {
                    break;
                }
            }
            if (loop > 3000) {
                break;
            }
        }
    }



    return (
        <div>
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Number of Lectures in a day</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            name="no_of_Lectures"
                            as="select"
                            defaultValue="0"
                            value={no_of_Lectures}
                            onChange={(e) => {
                                setLect(e.target.value);
                                setthem(0);
                                setthem2(0);

                                resetAllHours() ;
                                resetOnlyHours() ;
                            }}>

                            {opt}
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Label>Number of Working days in a week</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            name="no_of_days"
                            as="select"
                            defaultValue="0"
                            value={no_of_days}
                            onChange={(e) => {
                                setdays(e.target.value);
                                setthem(0);
                                setthem2(0);
                                foroff();

                                 resetAllHours() ;
                                 resetOnlyHours() ;
                            }}>
                            {opt2}
                        </Form.Control>
                    </Col>
                </Row>
                <br />
            </Form>

            <Form onSubmit={fill_Faculties()}>
                <Row>
                    <Col>
                        <Form.Label>Enter the Number of Faculties</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            name="no_of_faculties"
                            as="select"
                            defaultValue="0"
                            value={no_of_faculties}
                            onChange={(e) => {
                                setthem(e.target.value);
                                 resetAllHours() ;
                                 resetOnlyHours();
                                setfn([]);
                                setModalShow1(true);
                                check();
                            }}>
                            {opt}
                        </Form.Control>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <br />

                <Details
                    show={modalShow1}
                    heading={<div><h2>Faculties Data</h2><mark><strong><i><sub>(Tip - Just enter short names for reference...)</sub></i></strong></mark></div>}
                    footing={<div><sub></sub></div>}
                    data={faculty_data}
                    onHide={() => { setModalShow1(false); }}
                    getAllHours={getAllHours}
                    resetAllHours={resetAllHours}
                />
                <br />
            </Form>

            <Form onSubmit={fill_classes()}>
                <Row>
                    <Col>
                        <Form.Label>Enter the Number of Classrooms: </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            name="no_of_classes"
                            as="select"
                            defaultValue="0"
                            value={no_of_classes}
                            onChange={(e) => {
                                setthem2(e.target.value);
                                resetAllHours() ;
                                resetOnlyHours() ;
                                setModalShow2(true);
                                setAllow(false);
                            }}>
                            {opt}
                        </Form.Control>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <br />

                
                <Details
                    show={modalShow2}
                    heading={<div><h2>Class Lectures Data <br /></h2><sub><strong><i>Enter number of hours/week for every faculty.<br /><mark>(Default value will be 0)</mark></i></strong></sub></div>}
                    footing={<div></div>}
                    data={class_data}
                    onHide={() => setModalShow2(false)}
                    getAllHours={getAllHours}
                    resetAllHours={resetAllHours}
                />
            </Form>

            <hr />
            <Row>

                <Button
                    className="ml-4"
                    disabled={allow}
                    onClick={finalize}
                    variant="outline-dark"
                ><strong>For Students</strong></Button>

                <Button
                    className="ml-auto mr-4"
                    disabled={allow}
                    onClick={finalize2}
                    variant="outline-dark"
                ><strong>For Faculty</strong></Button>

            </Row>
            <br />

            <Tablize
                show={algo}
                data={col_data}
                heading={<div><h2>Time-Tables for Students<br /></h2><mark><sub><strong><i>(Take the screenshots)</i></strong></sub></mark></div>}
                footing={<div></div>}
                time_table={time_table}
                faculty_names={faculty_names}
                no_of_days={no_of_days}
                no_of_classes={no_of_classes}
                no_of_Lectures={no_of_Lectures}
                no_of_faculties={no_of_faculties}
                onHide={() => setAlgo(false)}
            />

            <Tablizef
                show={algo2}
                data={col_data}
                heading={<div><h2>Time-Tables for Faculties<br /></h2><mark><sub><strong><i>(Take the screenshots)</i></strong></sub></mark></div>}
                footing={<div></div>}
                time_table={time_table}
                faculty_names={faculty_names}
                no_of_days={no_of_days}
                no_of_classes={no_of_classes}
                no_of_Lectures={no_of_Lectures}
                no_of_faculties={no_of_faculties}
                onHide={() => setAlgo2(false)}
            />
        </div >
    )
}

export default Filling
