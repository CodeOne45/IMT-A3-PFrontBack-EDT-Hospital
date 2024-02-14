import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { endPoint } from "../config";
import { useUpdatedConstraints } from "../contexts/UpdatedConstraintsContext";
import ConstraintItem from "./CreateConstraintItem";
import GenericForm from "../pages/constraints/forms/GenericForm";

export default function CreateConstraintList() {
  const [component, setComponent] = useState<JSX.Element | undefined>(
    undefined
  );
  const [search, setSearch] = useState<string>("");
  const { constraintFromRecommandation } = useUpdatedConstraints();
  const [constraints, setConstraints] = useState<
    { id: number; name: string }[]
  >([]);

  const handleBack = () => {
    setComponent(undefined);
  };

  useEffect(() => {
    fetch(`${endPoint}/constraints`)
      .then((response) => response.json())
      .then((data) => {
        const constraints = Object.entries(data).map(([id, name]) => {
          return { id: parseInt(id), name: "" + name };
        });
        setConstraints(constraints);
        if (constraintFromRecommandation) {
          console.log(constraintFromRecommandation);
          const constraint = constraints.find(
            (c) => c.id === constraintFromRecommandation.type
          );
          console.log(constraint);

          // if (constraintFromRecommandation) {
          //   console.log(constraintFromRecommandation);
          //   const constraint = constraints.find(
          //     (c) => c.id === constraintFromRecommandation.type
          //   );
          //   // TODO : fix
          //   setComponent(
          //     <AssignShift
          //       onBack={handleBack}
          //       title={constraint!.name}
          //       id={`${constraint!.id}`}
          //     />
          //   );
        }
      });
  }, []);

  type Category = {
    title: string;
    constraints: {
      name: string;
      component: any;
    }[];
  };

  if (constraints.length === 0) return <Typography>Loading...</Typography>;

  // 1 2 3 4 5 / 10 13 14 16 18 19 20 21 / 5 8 11 12 15 17 / 6 7 / 9)

  const category1: Category = {
    title: "Assign/Forbid shift",
    constraints: constraints
      .filter((c) => [1, 2, 3, 4, 5].includes(c.id))
      .map((c) => {
        // the params are in the name at the very end between parenthesis
        // ex: "Assign 1 shift to 1/many nurse(s) once (S,D,N)"
        const parsedParams = c.name.match(/\(([^)]+)\)$/i)![1];
        console.log(c.name);
        console.log("parsedParams", parsedParams);
        console.log(parsedParams.includes("S"));
        const S = parsedParams.includes("S");
        const D = parsedParams.includes("D");
        const N = parsedParams.includes("N");
        const P = parsedParams.includes("P");

        return {
          name: c.name,
          component: (
            <GenericForm
              onBack={handleBack}
              title={c.name}
              id={c.id}
              S={S}
              D={D}
              N={N}
              P={P}
            />
          ),
        };
      }),
  };

  const category2: Category = {
    title: "Preferences",
    constraints: constraints
      .filter((c) => [6, 7].includes(c.id))
      .map((c) => {
        // the params are in the name at the very end between parenthesis
        // ex: "Assign 1 shift to 1/many nurse(s) once (S,D,N)"
        const parsedParams = c.name.match(/\(([^)]+)\)/);
        const S = parsedParams![1].includes("S");
        const D = parsedParams![1].includes("D");
        const N = parsedParams![1].includes("N");
        const P = parsedParams![1].includes("P");

        return {
          name: c.name,
          component: (
            <GenericForm
              onBack={handleBack}
              title={c.name}
              id={c.id}
              S={S}
              D={D}
              N={N}
              P={P}
            />
          ),
        };
      }),
  };

  const category3: Category = {
    title: "Cover",
    constraints: constraints
      .filter((c) => [9].includes(c.id))
      .map((c) => {
        // the params are in the name at the very end between parenthesis
        // ex: "Assign 1 shift to 1/many nurse(s) once (S,D,N)"
        const parsedParams = c.name.match(/\(([^)]+)\)/);
        const S = parsedParams![1].includes("S");
        const D = parsedParams![1].includes("D");
        const N = parsedParams![1].includes("N");
        const P = parsedParams![1].includes("P");

        return {
          name: c.name,
          component: (
            <GenericForm
              onBack={handleBack}
              title={c.name}
              id={c.id}
              S={S}
              D={D}
              N={N}
              P={P}
            />
          ),
        };
      }),
  };

  const category4: Category = {
    title: "Minimum/Maximum",
    constraints: constraints
      .filter((c) => [10, 13, 14, 16, 18, 19, 20, 21].includes(c.id))
      .map((c) => {
        // the params are in the name at the very end between parenthesis
        // ex: "Assign 1 shift to 1/many nurse(s) once (S,D,N)"
        const parsedParams = c.name.match(/\(([^)]+)\)/);
        const S = parsedParams![1].includes("S");
        const D = parsedParams![1].includes("D");
        const N = parsedParams![1].includes("N");
        const P = parsedParams![1].includes("P");

        return {
          name: c.name,
          component: (
            <GenericForm
              onBack={handleBack}
              title={c.name}
              id={c.id}
              S={S}
              D={D}
              N={N}
              P={P}
            />
          ),
        };
      }),
  };

  const category5: Category = {
    title: "Breaks",
    constraints: constraints
      .filter((c) => [5, 8, 11, 12, 15, 17].includes(c.id))
      .map((c) => {
        // the params are in the name at the very end between parenthesis
        // ex: "Assign 1 shift to 1/many nurse(s) once (S,D,N)"
        const parsedParams = c.name.match(/\(([^)]+)\)/);
        const S = parsedParams![1].includes("S");
        const D = parsedParams![1].includes("D");
        const N = parsedParams![1].includes("N");
        const P = parsedParams![1].includes("P");

        return {
          name: c.name,
          component: (
            <GenericForm
              onBack={handleBack}
              title={c.name}
              id={c.id}
              S={S}
              D={D}
              N={N}
              P={P}
            />
          ),
        };
      }),
  };

  const categories: Category[] = [
    category1,
    category2,
    category3,
    category4,
    category5,
  ];

  return (
    <>
      {component ? (
        component
      ) : (
        <>
          <Typography variant="h6">Constraints</Typography>
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            placeholder="Search for a constraint..."
            sx={{ mt: 2 }}
            onChange={(e) => setSearch(e.target.value)}
          />
          {categories
            // .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
            .map((category, i) => {
              const filteredConstraints = category.constraints.filter((c) =>
                c.name.toLowerCase().includes(search.toLowerCase())
              );
              if (filteredConstraints.length === 0) return null;

              return (
                <Box sx={{ mt: 3 }} key={"category" + i}>
                  <Typography variant="h6">{category.title}</Typography>
                  {filteredConstraints.map((constraint) => (
                    <Box sx={{ mt: 1 }}>
                      <ConstraintItem
                        name={constraint.name}
                        onClick={() => {
                          setComponent(constraint.component);
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              );
            })}
        </>
      )}
    </>
  );
}
