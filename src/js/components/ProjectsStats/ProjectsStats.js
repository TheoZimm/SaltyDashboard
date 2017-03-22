import React from 'react';
import Box from 'grommet/components/Box';
import Legend from 'grommet/components/Legend';


class ProjectsStats extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let { projects } = this.props;
        let tags = projects.reduce((a, p) => [ ...a, ...p.tags ], []);
        const sortedTags = tags.filter((v, i, a) => a.indexOf(v) === i); 
        console.log(sortedTags);
        if (projects.length) {

            ////////////////////////////////////////

            return (

                <Box
                    pad='small'
                    margin='small'
                    colorIndex='light-1'
                    className="max-height">
                    <Legend series={[{ "label": "Americas", "value": 40, "colorIndex": "graph-1" }, { "label": "Europe", "value": 20, "colorIndex": "unset" }, { "label": "Asia", "value": 15, "colorIndex": "graph-3" }]}
                        onClick={false}
                        total={true}
                        size='medium' />
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
