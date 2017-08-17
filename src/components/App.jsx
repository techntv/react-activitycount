import React, {Component} from 'react'
import SkiDayList from './SkiDayList.jsx';
import SkiDayCount from './SkiDayCount.jsx';
import AddDayForm from './AddDayForm.jsx';
import Menu from './Menu.jsx';
import Page404 from './Page404.jsx';
import About from './About.jsx';


import { 
        BrowserRouter as Router,
        Route,
        Link,
        HashRouter,
        Switch 
    } from 'react-router-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            allSkiDays: [
                {
                    resort: "Squaw Valley",
                    date: new Date("1/2/2016"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Kirkwood",
                    date: new Date("3/28/2016"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: "Mt. Tallac",
                    date: new Date("4/2/2016"),
                    powder: false,
                    backcountry: true
                }
            ],
           
        }
    }
    countDays(filter){
        const { allSkiDays } = this.state
        return allSkiDays.filter(
            (day) => (filter) ? day[filter] : day).length
    }
    render(){
        
        return (
            <Router>
                <div className="app"> 
                    <Menu />
                   
                    <Switch>
                        <Route exact path='/' 
                            render={() => <SkiDayCount total={this.countDays()}
                                                        powder={this.countDays("powder")}
                                                        backcountry={this.countDays("backcountry")}/>}/>
                        <Route path='/add-day' 
                            render={() => <AddDayForm />}/>

                        <Route path='/list-days'
                            render={({match}) => <SkiDayList days={this.state.allSkiDays}
                                                                match={match}
                                                        />}/>  
                        <Route component={Page404}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App

// filter={this.props.params.filter}