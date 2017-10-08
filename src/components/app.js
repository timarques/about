import React, {Component} from 'react'
import Header from './header'
import Container from './container'

class App extends Component {
    constructor(props)
    {
        super(props)
        this.data = this.props.data
        this.sectionIndex = 0
        this.state = {section: "home", language: "en", data: null}
    }
    shouldComponentUpdate(nextProps, nextState)
    {
        return nextState.section !== this.state.section || nextState.language !== this.state.language
    }
    detectSectionAndLanguage(callback){
        const location = window.location.hash.split("/")
        const userLanguage = (window.navigator.userLanguage || window.navigator.language).split("-")[0]
        this.data = this.props.data
        let language = this.state.language
        let section = this.state.section
        if(this.data[userLanguage]) language = userLanguage
        if(location.length>1)
            if(this.data[language].sections[location[2]]) section = location[2]
        if(location.length>0)
            if(this.data[location[1]]) language = location[1]
        this.data = this.data[language]
        this.sectionIndex = Object.keys(this.data.sections).indexOf(section)
        this.setState({section: section, language: language, data: this.data.sections[section]},callback)
    }
    componentWillMount()
    {
        this.detectSectionAndLanguage(()=>{
            window.location.hash = "/"+this.state.language+"/"+this.state.section
        })
    }
    changeSection(section)
    {
        window.location.hash = "/"+this.state.language+"/"+section
    }
    componentDidMount()
    {
        const handleWindowScroll = (yValue) => {
            const sectionsKeys = Object.keys(this.data.sections)
            if (yValue > 0 && sectionsKeys[this.sectionIndex + 1] && (window.innerHeight + window.scrollY) >= document.scrollingElement.scrollHeight)
                this.changeSection(sectionsKeys[this.sectionIndex + 1])
            else if (yValue < 0 && this.sectionIndex > 0 && window.scrollY === 0)
                this.changeSection(sectionsKeys[this.sectionIndex - 1])
        }
        window.addEventListener("hashchange",()=>this.detectSectionAndLanguage(()=>{
            if(window.location.hash !== "#/"+this.state.language+"/"+this.state.section)
                window.location.hash = "/"+this.state.language+"/"+this.state.section
        }))
        window.addEventListener("DOMMouseScroll", (event) => handleWindowScroll(event.detail))
        window.addEventListener("mousewheel", (event) => handleWindowScroll(event.deltaY))
    }
    render() {
        return (
            <div className="App">
                <Header current={{section:this.state.section, language:this.state.language}} data={{menu:this.data.menu}} actions={{menuListItemClick:this.changeSection.bind(this)}}></Header>
                <Container section={this.state.section} data={this.state.data}></Container>
            </div>
        )
    }
}

export default App;
