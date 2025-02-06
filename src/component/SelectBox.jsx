import Select from "react-select";

const SelectBox = ({ sizes }) => {
	console.log(sizes);

	const options = sizes.map((size) => ({
		value: size,
		label: size,
	}));

	return <Select options={options} />;
};

export default SelectBox;
