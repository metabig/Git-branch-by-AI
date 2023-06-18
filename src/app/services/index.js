import cohere from "cohere-ai";

const initCohere = () => {
  /**
   * @returns {void}
   */

  cohere.init(process.env.REACT_APP_COHERE_API_KEY);
};

export const getBranchName = async ({id, description}) => {
  /**
   * @param {string} id - The ticket id.
   * @param {string} description - The ticket description.
   *
   * @returns {string} - The branch name.
   */

  const branch_name_prompt = `
    Development git flow. The result is a git branch name.
    Create a slug from the "Ticket title". Join words by underscore.
    Start with the ticket id.
    
    Example 1:
    
    Ticket title: "Add a new table to the Feedback module"
    Ticket id: 142133
    Result: _142133_add_new_table_to_feedback_module
    
    Example 2:
    Ticket title: "Fix dashboard bug that appears when clicking on images"
    Ticket id: 142166
    Result: _142166_fix_dashboard_image_onclick_bug
    
    Give me a name for the following Ticket: Ticket title: "${description}"
    Ticket id: ${id}

    Return me the branch name, only the branch name, nothing else:
  `;

  initCohere();

  const branch_name = await cohere
    .generate({
      prompt: branch_name_prompt,
      model: "command",
      max_tokens: 300,
      temperature: 0.9,
      k: 0,
      stop_sequences: [],
      return_likelihoods: "NONE",
    })
    .then((res) => res.body.generations[0].text);

  return branch_name;
};
