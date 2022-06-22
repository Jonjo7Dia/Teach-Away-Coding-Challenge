import {render as rtlRender} from '@testing-library/react';
import '@testing-library/jest-dom'
import {Provider} from 'react-redux';
import store from '../store/index';
import Pagination from '../components/footer/Pagination'
import ViewResults from '../components/body/ViewResults';
import { act } from 'react-dom/test-utils';


const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
);
//first check if buttons are present

describe('pagination', ()=>{
    test('ensure pagination buttons are present', ()=>{
       const {container }=  render(<Pagination/>)
        expect(container.getElementsByClassName("pagination").length).toBe(2)
    });
});

//check if on click view results == 60
const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

describe('test pagination button', ()=>{
    test('test click event', ()=> {
        const footer = render(<Pagination />);
        act(()=>{
            footer.getAllByRole('button')[1].click();
        })
        const {container }= render(<ViewResults/>);

        expect(container.getElementsByClassName('loadingMedia').length).toBe(60);
    })
})