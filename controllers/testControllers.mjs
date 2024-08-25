export async function postController(req, res)  {
    try {
        const { data } = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: 'Invalid input' });
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
       const lowercaseAlphabets = alphabets.filter(char => /^[a-z]$/.test(char));
        const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().reverse()[0]] : [];

        // Respond with the structured data
        res.status(200).json({
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet
        });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            message: 'An unexpected error occurred. Please try again later.'
        });
    }
}