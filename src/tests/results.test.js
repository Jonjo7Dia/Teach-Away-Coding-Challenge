import {render as rtlRender} from '@testing-library/react';
import '@testing-library/jest-dom'
import {Provider} from 'react-redux';
import store from '../store/index';
import ViewResults from '../components/body/ViewResults'

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);
//with default initial state the amount of image cards should = 60 regardless of loaded elements or not

describe('results', ()=>{
    test('ensure that all results are present and being loaded', ()=>{
        const {container }=  render(<ViewResults/>);
        expect(container.getElementsByClassName("imageCard").length).toBe(60)
    });
})