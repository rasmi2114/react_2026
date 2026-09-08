export const TodoFilter = ({ activeFilter, onFilterChange }) => {
    const filters = [
        { value: "all", label: "All Items" },
        { value: "checked", label: "Checked" },
        { value: "unchecked", label: "Unchecked" },
    ];

    return (
        <div className="todofilter" aria-label="Filter todos">
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    type="button"
                    className={activeFilter === filter.value ? "active" : ""}
                    onClick={() => onFilterChange(filter.value)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};
