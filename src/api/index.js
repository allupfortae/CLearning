import axios from "axios";

const Books_Url = "https://bookshelves.p.rapidapi.com/books";

const options = {
  headers: {
    "X-RapidAPI-Key": "d721f885b0mshe39b895daab722bp14f0c8jsnbb3edd99ae82",
    "X-RapidAPI-Host": "bookshelves.p.rapidapi.com",
  },
};

export const getBooksdata = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(Books_Url, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
