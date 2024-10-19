import React, { useEffect, useState } from "react";
import "../styles/Form.css"; // Import custom CSS for styling
import UserProfile2 from "./UserProfile2"; // Import UserProfile2 component
import { Button } from "./Button"; // Import Heading and Button
import { Heading } from "./Heading";
import { useChild } from "../context/ChildContext"; // Import Heading and Button

const Form = () => {



    // New state for game interests
    const [favoriteGenre, setFavoriteGenre] = useState("");
    const [weekendActivity, setWeekendActivity] = useState("");
    const [bookType, setBookType] = useState("");
    const [additionalDetails, setAdditionalDetails] = useState("");

    const [gameInterest, setGameInterest] = useState("");
    const games = ["Video Games", "Board Games", "Puzzles", "Sports", "Other"];
    const genere = ["Animated", "Action & Adventure", "Drama", "Comedy", "Other"];
    const vocationActivity = ["Outdoor activities and sports", "Arts and crafts", "Indoor games and activities", "Movies and TV series", "Other"];
    const BooksArray = ["Fantasy books", "Science Fiction books", "Thriller and adventure books", "Educational and non-fiction books", "Other"];

    const [otherGameInterest, setOtherGameInterest] = useState(""); // State for "Other" game interest
    const [otherFavoriteGenre, setOtherFavoriteGenre] = useState(""); // State for "Other" favorite genre
    const [otherWeekendActivity, setOtherWeekendActivity] = useState(""); // State for "Other" weekend activity
    const [otherBookType, setOtherBookType] = useState(""); // State for "Other" book type

    const { childrenData, addChild, updateChild, deleteChild, selectChild, selectedChildId } = useChild();

    useEffect(() => {
        if (selectedChildId) {
            const updatedChildData = { ...selectedChildId };
            updatedChildData.questions.forEach((question) => {
                switch (question.question) {
                    case "What kinds of games does he like to play the most?":
                        setGameInterest(question.answer);
                        if (!games.includes(question.answer)) {
                            setOtherGameInterest(question.answer);
                        }

                        break;
                    case "What are your child's favorite movies or series?":
                        setFavoriteGenre(question.answer);
                        if (!genere.includes(question.answer)) {
                            setOtherFavoriteGenre(question.answer);
                        }
                        break;
                    case "How does he like to spend time during vacations or on weekends?":
                        setWeekendActivity(question.answer);
                        if (!vocationActivity.includes(question.answer)) {
                            setOtherWeekendActivity(question.answer);
                        }
                        break;
                    case "What types of books does he like to read?":
                        setBookType(question.answer);
                        if (!BooksArray.includes(question.answer)) {
                            setOtherBookType(question.answer);
                        }
                        break;
                    case "Is there something important for us to know?":
                        setAdditionalDetails(question.answer);
                        break;
                    default:
                        break;
                }
            });

        } else {
            // alert('Please select a child first');
        }

    }, [selectedChildId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a copy of the selected child data to avoid mutating the original state
        const updatedChildData = { ...selectedChildId };

        // Update answer based on form state values
        updatedChildData.questions.forEach((question) => {
            switch (question.question) {
                case "What kinds of games does he like to play the most?":
                    question.answer = gameInterest === 'Other' ? otherGameInterest : gameInterest;
                    break;
                case "What are your child's favorite movies or series?":
                    question.answer = favoriteGenre === 'Other' ? otherFavoriteGenre : favoriteGenre;
                    break;
                case "How does he like to spend time during vacations or on weekends?":
                    question.answer = weekendActivity === 'Other' ? otherWeekendActivity : weekendActivity;
                    break;
                case "What types of books does he like to read?":
                    question.answer = bookType === 'Other' ? otherBookType : bookType;
                    break;
                case "Is there something important for us to know?":
                    question.answer = additionalDetails;
                    break;
                default:
                    break;
            }
        });

        // Call the updateChild function from the context (assuming it handles updates)
        if (selectedChildId?.id) {
            await updateChild(selectedChildId?.id, updatedChildData);
            alert('The changes has been saved sucessfully');
            console.log('Child updated', selectedChildId);
        } else {
            // alert('Please select a Child First');
        }
        // Clear form state after successful submission (optional)
        /*  setGameInterest("");
          setFavoriteGenre("");
          setWeekendActivity("");
          setBookType("");
          setAdditionalDetails("");
          setOtherGameInterest("");
          setOtherFavoriteGenre("");
          setOtherWeekendActivity("");
          setOtherBookType("");*/

        console.log("Form submitted successfully!", selectedChildId);
    };

    const handleCancel = () => {
        // Logic for cancel button, e.g., clearing the form or navigating away
        setGameInterest("");
        setFavoriteGenre("");
        setWeekendActivity("");
        setBookType("");
        setAdditionalDetails("");
        setOtherGameInterest("");
        setOtherFavoriteGenre("");
        setOtherWeekendActivity("");
        setOtherBookType("");
        console.log("Cancel button clicked");
    };



    return (
        <form onSubmit={handleSubmit} className="form-container">
            {/* New Question: Game Interests */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    1. What kind of games interests them?
                </Heading>
                <div className="flex flex-col gap-4 mt-4">
                    {games.map((game, index) => {
                        /*     let other = false;
                             let shouldChecked = false;
                             console.log(game);
                              if(!games.includes(gameInterest) && game === 'Other'){
                                   other = true;
                              }else if(games.includes(gameInterest) && game !== 'Other' && game === gameInterest) {
                                  other = true;
                              }*/



                        return (
                            <div key={index}>
                                <UserProfile2
                                    userAnimatedText={game}
                                    isChecked={gameInterest === game || (game === 'Other' && !games.includes(gameInterest))}
                                    onChange={() => {
                                        if (game === 'Other') {
                                            setGameInterest(game);
                                        } else {
                                            setGameInterest(game);
                                            setOtherGameInterest(""); // Clear "Other" text if a different option is selected
                                        }
                                    }}
                                    isForm={true} // Add isForm prop
                                />
                                {game === 'Other' && (!games.includes(gameInterest) || gameInterest === 'Other') && (
                                    <div className="wdh h40 undefined mt-4 border-2 border-gray-300 flex items-center gap-5 px-[18px] bg-white-a700 flex-1 rounded-[12px] cursor-pointer">
                                        <input
                                            type="text"
                                            value={otherGameInterest}
                                            onChange={(e) => setOtherGameInterest(e.target.value)}
                                            placeholder="Please specify"
                                            className="input-text p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Question 2 */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    2. What is their favorite movie/series genre?
                </Heading>
                <div className="flex flex-col gap-4 mt-4">
                    {genere.map((genre, index) => (
                        <div key={index}>
                            <UserProfile2
                                userAnimatedText={genre}
                                isChecked={favoriteGenre === genre || (genre === 'Other' && !genere.includes(favoriteGenre))}
                                onChange={() => {
                                    if (genre === 'Other') {
                                        setFavoriteGenre(genre);
                                    } else {
                                        setFavoriteGenre(genre);
                                        setOtherFavoriteGenre(""); // Clear "Other" text if a different option is selected
                                    }
                                }}
                                isForm={true} // Add isForm prop
                            />
                            {genre === 'Other' && (!genere.includes(favoriteGenre) || favoriteGenre === 'Other') && (
                                <div className="wdh h40 undefined mt-4 border-2 border-gray-300 flex items-center gap-5 px-[18px] bg-white-a700 flex-1 rounded-[12px] cursor-pointer">

                                    <input
                                        type="text"
                                        value={otherFavoriteGenre}
                                        onChange={(e) => setOtherFavoriteGenre(e.target.value)}
                                        placeholder="Please specify"
                                        className="input-text p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>




            {/* Question 3 */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    3. How do they like to spend time during weekends?
                </Heading>
                <div className="flex flex-col gap-4 mt-4">
                    {vocationActivity.map((activity, index) => (
                        <div key={index}>
                            <UserProfile2
                                userAnimatedText={activity}
                                isChecked={weekendActivity === activity || (activity === 'Other' && !vocationActivity.includes(weekendActivity))}
                                onChange={() => {
                                    if (activity === 'Other') {
                                        setWeekendActivity(activity);
                                    } else {
                                        setWeekendActivity(activity);
                                        setOtherWeekendActivity(""); // Clear "Other" text if a different option is selected
                                    }
                                }}
                                isForm={true} // Add isForm prop
                            />
                            {activity === 'Other' && (!vocationActivity.includes(weekendActivity) || weekendActivity === 'Other') && (
                                <div className="wdh h40 undefined mt-4 border-2 border-gray-300 flex items-center gap-5 px-[18px] bg-white-a700 flex-1 rounded-[12px] cursor-pointer">

                                    <input
                                        type="text"
                                        value={otherWeekendActivity}
                                        onChange={(e) => setOtherWeekendActivity(e.target.value)}
                                        placeholder="Please specify"
                                        className="input-text p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Question 4 */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    4. What type of books do they like to read?
                </Heading>
                <div className="flex flex-col gap-4 mt-4">
                    {BooksArray.map((book, index) => (
                        <div key={index}>
                            <UserProfile2
                                userAnimatedText={book}
                                isChecked={bookType === book || (book === 'Other' && !BooksArray.includes(bookType))}
                                onChange={() => {
                                    if (book === 'Other') {
                                        setBookType(book);
                                    } else {
                                        setBookType(book);
                                        setOtherBookType(""); // Clear "Other" text if a different option is selected
                                    }
                                }}
                                isForm={true} // Add isForm prop
                            />
                            {book === 'Other' && (!BooksArray.includes(bookType) || bookType === 'Other') && (
                                <div className="wdh h40 undefined mt-4 border-2 border-gray-300 flex items-center gap-5 px-[18px] bg-white-a700 flex-1 rounded-[12px] cursor-pointer">

                                    <input
                                        type="text"
                                        value={otherBookType}
                                        onChange={(e) => setOtherBookType(e.target.value)}
                                        placeholder="Please specify"
                                        className="input-text p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Details */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    5. Additional details
                </Heading>
                <textarea
                    value={additionalDetails}
                    onChange={(e) => setAdditionalDetails(e.target.value)}
                    placeholder="Tell us more about your child - what they like, what they don’t like, any special needs/interests/dislikes, etc..."
                    className="textarea min-w-[750px] mt-4 p-3 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                ></textarea>
            </div>

            {/* Form Actions */}
            <div className="form-actions flex gap-4 mt-8">
                <Button type="submit" className="save-button min-w-[290px] h-[66px]">
                    Save Changes
                </Button>
                <Button
                    type="button"
                    onClick={handleCancel}
                    className="cancel-button min-w-[143px] h-[66px]"
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default Form;
