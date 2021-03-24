import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Animal from './Animal';
import FirstClassComponent from './FirstClassComponent';
import EvtsWithArrowFn from './EvtsWithArrowFn';
import LifeCycle from './LifeCycle';
import MoreEvents from './MoreEvents';
import FirstForm from './FirstForm';
import { nanoid as getNanoId } from 'nanoid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    animalsBox: {
        display: 'flex',
        justifyContent: 'space-around',
        alignElements: 'center',
    }
});

const MainContent = () => {
    const classes = useStyles();
    const animals = [{
        name: 'Wolf',
        image: 'wolf.jpg',
        description: 'Gray wolves, or timber wolves, are canines with long bushy tails that are often black-tipped. Their coat color is typically a mix of gray and brown with buffy facial markings and undersides, but the color can vary from solid white to brown or black. Gray wolves look somewhat like a large German shepherd.'
    }, {
        name: 'Wolf',
        image: 'wolf.jpg',
        description: 'Gray wolves, or timber wolves, are canines with long bushy tails that are often black-tipped. Their coat color is typically a mix of gray and brown with buffy facial markings and undersides, but the color can vary from solid white to brown or black. Gray wolves look somewhat like a large German shepherd.'
    }];
    return (
        <Container maxWidth="md">
            <Box mt={10} className={classes.animalsBox}>
                {
                    animals.map(function ({ name, image, description }) {
                        return (
                            <Animal
                                key={getNanoId()}
                                name={name}
                                image={image}
                                description={description}
                            />
                        );
                    })
                }
            </Box>
            <Box mt={10}>
                <FirstClassComponent></FirstClassComponent>
                <EvtsWithArrowFn></EvtsWithArrowFn>
                <LifeCycle title="Custom title"></LifeCycle>
                <MoreEvents buttonTitle="Click me!"></MoreEvents>
                <FirstForm></FirstForm>
            </Box>
        </Container>
    );
}

export default MainContent;
