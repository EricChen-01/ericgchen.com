import {Box} from '@mui/material';
import {styled} from '@mui/material/styles'
import color from 'color';

const Glass = styled(Box)(({c,blur}) => ({
    borderRadius: 20,
    backgroundColor: color(c).alpha(0.2).toString(),
    backgroundImage: 'linear-gradient(to bottom right,' + color(c).alpha(0.14).toString() + ', ' + color(c).alpha(0).toString() + ')',
    backdropFilter: 'blur(' + blur + 'px)',
    boxShadow: '10px 10px 10px rgba(30,30,30, 0.1)',
    borderLeft: 'solid 1px ' + color(c).alpha(0.3).toString(),
    borderTop:'solid 1px ' + color(c).alpha(0.8).toString(),
}));

export function GlassCard(props) {
    const {color = '#ffffff', blur = 7, noBorders = false, ...rest} = props;

    return <Glass c={color} blur={blur} {...rest}/>
}

