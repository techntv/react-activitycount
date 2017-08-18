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
                    date: "2016/01/02",
                    powder: true,
                    backcountry: false
                }
                
            ]          
        }
    }
    addDay(newDay){
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                newDay
            ]
        })
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
                            render={() => <AddDayForm onNewDay={this.addDay.bind(this)}/>}/>

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