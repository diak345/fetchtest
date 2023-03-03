import logo from './logo.svg';
import './App.css';
import styled from "@emotion/styled" //<--これ
import { css } from '@emotion/css';//<--これ
import tw from "twin.macro";//<--これ
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import Fetchcmd from './fetchcmd';

function App() {
  const EmotionCSSbluetext=css`${tw`text-blue-400`}`;
  const EmotionStyled = styled.p`${tw`text-4xl`}`
  const BaseFontSize =css `${tw`text-sm text-yellow-600 lg:text-4xl`}`//<--これ


  
  const books = [
    {
      title: 'ハリー・ポッターと賢者の石',
      author: 'J.K.ローリング',
    },
    {
      title: 'こころ',
      author: '夏目漱石',
    },
  ];
  
  const columns = [
    {
      accessorKey: 'title',
      header: 'タイトル',
    },
    {
      accessorKey: 'author',
      header: '著者',
    },
  ];


  const table = useReactTable({
    data: books,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const Tr = styled.tr = tw`border-2`

  const TestButton = (async()=>{
   let returnresult =  await Fetchcmd();
  })



  return (
    <div className="App">
      <p>abc</p>
      <button onClick={(()=>TestButton())}>botan</button>
    </div>
  );
}

export default App;
