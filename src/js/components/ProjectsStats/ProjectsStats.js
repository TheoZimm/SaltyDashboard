/* eslint-disable */
import React from 'react';
import Box from 'grommet/components/Box';
import Legend from 'grommet/components/Legend';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import Heading from 'grommet/components/Heading';




class ProjectsStats extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let { projects } = this.props;

        // Occurence algorithm
        // take an array and sort each value and length of it
        const occurence = function (array) {
            let result = {};

            if (array instanceof Array) {
                array.forEach(function (v, i) {
                    if (!result[v]) {
                        result[v] = [i];
                    } else {
                        result[v].push(i);
                    }
                });
                Object.keys(result).forEach(function (v) {
                    result[v] = { "index": result[v], "length": result[v].length };
                });
            }
            return result;
        };


        
        // ****************
        // TAGS retrieval
        // ****************
        // Retrieve all tags from each projects
        let tags = projects.reduce((a, p) => [...a, ...p.tags], []);

        // Retrieve each tags occurence (no more duplicated value)
        let tagsOccurences = occurence(tags);

            let tagsIndices = Object.keys(tagsOccurences);
            let tagsIndice = tagsIndices[0]

            let sortedTags = [];

            // transform all tags occurence into a manually formated array (easier to user)
            tagsIndices.map((tagsIndice) => {
                sortedTags.push({name:tagsIndice, amount:tagsOccurences[tagsIndice].length})  
            });

            // Loop to get the correct array that Grommet wants
            let finalTags = [];
            sortedTags.map((tag,i) => {
                finalTags.push({"label": tag.name, "value": tag.amount, "colorIndex": "graph-"+i });
            });

        // ****************
        // ProjectManagers retrieval 
        // ****************
        // Same logic as above

        let projectManagers = [];
        projects.map((project) => {
            projectManagers.push(project.projectManager.username);
        });

 
        let pmOccurences = occurence(projectManagers);

       let pmsIndices = Object.keys(pmOccurences);
            let pmsIndice = pmsIndices[0]

            let sortedPms= [];
            pmsIndices.map((pmsIndice) => {
                sortedPms.push({name:pmsIndice, amount:pmOccurences[pmsIndice].length})  
            });

            let finalPms = [];
                 let arrayswag = [];
            sortedPms.map((pm,i) => {

                finalPms.push({"label": pm.name, "value": pm.amount, "colorIndex": "graph-"+(i+1) });
           
            });




        if (projects.length) {

            ////////////////////////////////////////

            return (

                <Box
                    pad='small'
                    margin='small'
                    colorIndex='light-1'
                    className="max-height">
                    <Heading>Amount of projects with those tags</Heading>
                    <Box pad='small'
                        colorIndex='light-2'
                        margin='small'>
                        <Legend series={finalTags}
                            onClick={false}
                            total={true}
                            size='medium' />
                    </Box >
                     <Heading>Projects by managers</Heading>
                    <Box pad='small'
                        align='center'
                        colorIndex='light-1'
                        margin='small'>
                        <AnnotatedMeter type='circle'
                            size='medium'
                            series={finalPms}
                            legend={true} />
                    </Box>
                </Box>
            );
        } else {
            return (
                <h1>Aucun projet donc aucune stats !</h1>
            );
        }

    };

}

export default ProjectsStats;
