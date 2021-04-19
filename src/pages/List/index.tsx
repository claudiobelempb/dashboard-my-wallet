import React, { useMemo, useState, useEffect } from "react";
import { v4 as uuid} from "uuid";

import { LayoutLateral } from "../../Layouts/LayoutLateral";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { CardList } from "../../components/CardList";
import { InputSelect } from "../../components/InputSelect";
import { Section } from "../../components/Section";
import { Title } from "../../components/Title";

import { formatValue } from "../../utils/formatValue";
import { formatDate } from "../../utils/fromatDate";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import listOfMonths from "../../utils/months";

interface IListProps {
  match: {
    params: {
      type: string;
    }
  };
}

interface IData {
  id: string;
  description: string;
  amount: string;
  frequency: string;
  date: string;
  color: string;
}

const List: React.FC<IListProps> = ({ match }) => {

  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()));

  const { type } = match.params;
  
  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saídas";
  }, [type]);

  const isBgcolor = useMemo(() => {
    return type === "entry-balance" ? "#F7931B" : "#E44C4E";
  }, [type]);

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return { value: index + 1, label: month };
    });
  },[])

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listData.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if(!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });
    return uniqueYears.map(year => {
        return { value: year, label: year };
    });
  },[listData]);

  useEffect(() => {

    const filteredData = listData.filter(item => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const formattedData = filteredData.map(item => {
      return {
        id: uuid(),
        description: item.description,
        amount: formatValue(Number(item.amount)),
        frequency: item.frequency,
        date: formatDate(item.date),
        color: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E"
      }
    })
    setData(formattedData);

  }, [listData, monthSelected, yearSelected]);

  return (
    <LayoutLateral>
      <Section>
        <Box aitems={"flex-start"}>
          <Title title={title} isBgcolor={isBgcolor}/>
        </Box>
        <Box fdirection={"row"} jcontent={"flex-end"}>
          <InputSelect onChange={(e) => setMonthSelected(e.target.value)} options={months} defaultValue={monthSelected}/>
          <InputSelect onChange={(e) => setYearSelected(e.target.value)} options={years} defaultValue={yearSelected}/>
        </Box>
      </Section>
      <Section>
        <Box fdirection={"row"}>
          <Button title={"Recorrentes"} tgColor={"#4E41F0"}/>
          <Button title={"Eventuais"} tgColor={"#E44C4E"}/>
        </Box>
      </Section>
      <Section>
        <Box>
          { 
            data.map((data) => {
              return <CardList key={data.id} tagcolor={data.color} title={data.description} subtitle={data.date} amount={data.amount}/>
            })
          }
        </Box>
      </Section>
    </LayoutLateral>
  );
}

export { List };