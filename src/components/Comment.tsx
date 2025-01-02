"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "../components/ui/Cart";
import { Button } from "../components/ui/Button";
import { Input } from '../components/ui/Input';

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postID: string;
}

export default function CommentSection({ postID }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObject: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment
      };
      setComments([...comments, newCommentObject]);
      setNewComment('');
      setAuthorName('');
    }
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find(comment => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-8 text-center px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-purple-500 text-center">Comments</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id} className="shadow-lg">
              <CardContent className='p-4'>
                <div className='font-semibold'>{comment.author}</div>
                <p className='mt-2'>{comment.text}</p>
                <Button
                  onClick={() => handleEditComment(comment.id)}
                  className='mt-4 text-blue-500'>
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className='text-black text-center'>No comments yet!</p>
        )}
      </div>
      <div className="mt-6 text-center">
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder='Your Name'
          className="w-full mb-4 p-2 border rounded text-gray-700"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Add a Comment'
          className="w-full mb-4 p-2 border rounded text-gray-700"
          rows={4}
        />
        <Button
          onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
          className="mt-4 bg-pink-400 hover:bg-blue-500 text-white text-center">
          {editingCommentId ? 'Save' : 'Submit'}
        </Button>
      </div>
    </div>
  );
}
